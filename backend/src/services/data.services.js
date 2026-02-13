import User from "../models/users.js";
import Behavior from "../models/Behavior.js";
import CheckIn from "../models/DailyCheckIn.js";

export const exportUserData = async(userId)=>{
    const [user,behaviors,checkIns] = await Promise.all([
        User.findById(userId).select('-password -__v'),// Exclude sensitive/tech fields
        Behavior.find({user:userId}).select('-__v'),
        CheckIn.find({user:userId}).select('-__v').sort({date:1})
    ]);

    return{
        generatedAt:new Date(),
        user,
        behaviors,
        checkIns
    }
};

export const deleteUserAccount = async(userId)=>{
    await DailyCheckIn.deleteMany({user:userId});
    await Behavior.deleteMany({user:userId});
    const result = await User.findByIdAndDelete(userId);
    return !!result;
}
