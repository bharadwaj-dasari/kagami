import Behavior from "../models/Behavior.js";
import CheckIn from "../models/DailyCheckIn.js";
import { normalizeDate } from "../utils/date.utils.js";

// Core aggregation logic for Phase 1 & 2
const aggregateReflection = async (userId, startDate, endDate) => {
    const start = normalizeDate(startDate);
    const end = new Date(endDate);
    end.setUTCHours(23, 59, 59, 999);

    const checkIns = await CheckIn.find({
        user: userId,
        date: { $gte: start, $lte: end }
    }).select('behavior date value');

    const behaviors = await Behavior.find({ user: userId }).select('name active evaluationType');

    const oneDay = 1000 * 60 * 60 * 24;
    const totalDaysInRange = Math.round((end - start) / oneDay);

    return behaviors.map(behavior => {
        const behaviorCheckIns = checkIns.filter(ci => 
            ci.behavior.toString() === behavior._id.toString()
        );
        
        const count = behaviorCheckIns.length;

        // Skip inactive behaviors with no data in range
        if (!behavior.active && count === 0) return null;

        return {
            behaviorId: behavior._id,
            behaviorName: behavior.name,
            active: behavior.active,
            totalDaysInRange,
            daysWithCheckIn: count,
            consistencyPercentage: totalDaysInRange > 0 
                ? Math.round((count / totalDaysInRange) * 100) 
                : 0
        };
    }).filter(item => item !== null);
};

export const getWeeklyReflection = async (req, res) => {
    try {
        const end = normalizeDate(new Date());
        const start = new Date(end);
        start.setDate(start.getDate() - 6); // Last 7 days inclusive

        const data = await aggregateReflection(req.user._id, start, end);

        res.status(200).json({ range: { start, end }, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRangeReflection = async (req, res) => {
    try {
        const { start, end } = req.query;

        if (!start || !end) return res.status(400).json({ error: "Start and End dates required." });

        const startDate = normalizeDate(start);
        const endDate = normalizeDate(end);

        if (startDate > endDate) return res.status(400).json({ error: "Invalid date range." });

        const dayDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
        if (dayDiff > 90) return res.status(400).json({ error: "Range cannot exceed 90 days." });

        const data = await aggregateReflection(req.user._id, startDate, endDate);

        res.status(200).json({ range: { start: startDate, end: endDate }, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTodayOverview = async (req, res) => {
    try {
        const today = normalizeDate(new Date());

        const activeBehaviors = await Behavior.find({ 
            user: req.user._id, 
            active: true 
        }).select('name evaluationType color');

        const todayCheckIns = await CheckIn.find({
            user: req.user._id,
            date: today
        });

        const data = activeBehaviors.map(behavior => {
            const match = todayCheckIns.find(ci => 
                ci.behavior.toString() === behavior._id.toString()
            );

            return {
                behaviorId: behavior._id,
                name: behavior.name,
                type: behavior.evaluationType,
                isCompleted: !!match,
                value: match ? match.value : null
            };
        });

        res.status(200).json({ date: today, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};