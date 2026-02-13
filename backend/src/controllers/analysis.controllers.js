import CheckIn from '../models/DailyCheckIn.js';
import Behavior from '../models/Behavior.js';
import { normalizeDate } from '../utils/date.utils.js';
import {calculateContinuity,calculateDayDistribution,calculateTrend} from "../services/stats.services.js"


export const getBehaviorPatterns = async (req, res) => {
    try {
        const { behaviorId } = req.params;
        const userId = req.user._id;

        const behavior = await Behavior.findOne({ _id: behaviorId, user: userId });
        if (!behavior) return res.status(404).json({ error: "Behavior not found." });

        // Fetch last 90 days
        const endDate = normalizeDate(new Date());
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - 89);

        const checkIns = await CheckIn.find({
            user: userId,
            behavior: behaviorId,
            date: { $gte: startDate, $lte: endDate }
        }).sort({ date: -1 });

        // Use the Service for logic
        const insights = {
            currentContinuity:calculateContinuity(checkIns),
            totalInPeriod:checkIns.length,
            trend:calculateTrend(checkIns),
            dayOfWeekFrequency:calculateDayDistribution(checkIns)
        };

        res.status(200).json({
            behavior: { id: behavior._id, name: behavior.name },
            insights
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};