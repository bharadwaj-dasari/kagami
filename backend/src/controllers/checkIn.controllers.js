import CheckIn from "../models/DailyCheckIn.js";
import Behavior from "../models/Behavior.js";
import { normalizeDate } from "../utils/date.utils.js";


//validate value based on Behavior type
const validateValue = (type, value) => {
  switch (type) {
    case 'boolean':
      return typeof value === 'boolean';
    case 'numeric':
      return typeof value === 'number' && !isNaN(value);
    case 'scale':
      return Number.isInteger(value) && value >= 1 && value <= 10;
    case 'text':
      return typeof value === 'string' && value.trim().length > 0;
    default:
      return false;
  }
};

export const createCheckIn = async(req,res)=>{
    try{
        const {behaviorId,date,value} = req.body;
        const userId = req.user._id;
        if(!behaviorId || !date || value === undefined){
            return res.status(400).json({error:'Missing required fields: behaviorId, date, or value.'});
        }
        const behavior = await Behavior.findOne({_id:behaviorId,user:userId});
        if(!behavior){
            return res.status(404).json({error:'Behavior not found or does not belong to user.'});
        }
        if(!behavior.active){
            return res.status(400).json({error:'Cannot check in to an inactive behavior.'});
        }
        if (!validateValue(behavior.evaluationType, value)) {
            return res.status(400).json({ 
                error: `Invalid value for evaluation type '${behavior.evaluationType}'.`,
                requirements: behavior.evaluationType === 'scale' ? 'Integer 1-10' : 'Matches type definition'
            });
        }
        const normalizedDate = normalizeDate(date);
    
            const checkIn = new ChecckIn({
                user: userId,
                behavior: behaviorId,
                date: normalizedDate,
                value: value
                });

                await checkIn.save();

                return res.status(201).json({
                message: 'Check-in recorded.',
                data: checkIn
            });
    }catch(err){
        if(err.code === 11000){
            return res.status(409).json({err:'Check In already exists for this behavior on this date'});
        }
        return res.status(500).json({err:err.message});
    }
};

export const getCheckInByDate = async(req,res)=>{
    try{
      const {startDate,endDate} = req.body;
      const userId = req.user._id;
      if(!startDate || !endDate){
        return res.status(400).json({error:'startDate and endDate query parameters are required'});
      }
      const start = normalizeDate(startDate);
      const end = normalizeDate(endDate);

      const checkIns = await CheckIn.find({user:userId,date:{$gte:start,$lte:end}}).sort({date:1}).populate('behavior','name evaluationType');
      return res.status(200).json({date:checkIns});
    }catch(err){
      return res.status(500).json({err:err.message});
    }
};

export const getTodayCheckIns = async(req,res)=>{
  try{
    const userId = req.user._id;
    const todayStr = req.query.date || new Date().toISOString();
    const today = normalizeDate(todayStr);

    const checkIns = await DailyCheckIn.find({
      user:userId,
      date:today
    }).populate('behavoir','name evaluationType');

    return res.status(200).json({date:today,date:checkIns});
  }catch(err){
    return res.status(500).json({err:err.message});
  }
};

export const deleteCheckIn = async(req,res)=>{
  try{
    const {id} = req.params;
    const userId = req.user._id;
    const result = await CheckIn.findOneAndDelete({_id:id,user:userId});
    if(!result){
      return res.status(404).json({error:'Check in not found or permission denied'});
    }
    return res.status(200).json({message:'Check in removed'});
  }catch(err){
    return res.status(500).json({err:err.message});
  }
};