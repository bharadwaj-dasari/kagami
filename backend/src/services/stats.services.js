
import { normalizeDate } from "../utils/date.utils.js";

export const calculateContinuity = (checkIns) =>{
    if(!checkIns || checkIns.length === 0)return 0;
    const sorted = checkIns.sort((a,b)=>new Date(b.date) - new Date(a.date));
    const today = normalizeDate(new Date());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    let streak = 0;
    let expectedDate = sorted[0].date.getTime() === today.getTime()?today:yesterday;
    for(let checkIn of sorted){
        const checkInTime = checkIn.date.getTime();
        if(checkInTime === expectedDate.getTime()){
            streak++;
            expectedDate.setDate(expectedDate.getDate()-1);
        }else if(checkInTime >expectedDate.getTime()){
            continue;
        }else{
            break;
        }
    }
    return streak;
};

export const calculateDayDistribution = (checkIns) => {
    const distribution = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    checkIns.forEach(ci => distribution[new Date(ci.date).getUTCDay()]++);
    return distribution;
};

export const calculateTrend = (checkIns) => {
    const now = new Date();
    const thirtyDaysAgo = new Date(now); thirtyDaysAgo.setDate(now.getDate() - 30);
    const sixtyDaysAgo = new Date(now); sixtyDaysAgo.setDate(now.getDate() - 60);

    const last30 = checkIns.filter(c => c.date >= thirtyDaysAgo).length;
    const prev30 = checkIns.filter(c => c.date < thirtyDaysAgo && c.date >= sixtyDaysAgo).length;
    
    let direction = 'stable';
    if (last30 > prev30) direction = 'improving';
    if (last30 < prev30) direction = 'declining';

    return { direction, last30, prev30, delta: last30 - prev30 };
};