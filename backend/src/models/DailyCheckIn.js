import mongoose from "mongoose";

const DailyCheckInSchema = new mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:[true,'User id field required'],
            index:true
        },
        behavior:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Behavior',
            required:[true,'Behavior id field is required']
        },
        date:{
            type:Date,
            required:[true,'Date is required'] //Stored as UTC midnight
        }
},{
    timestamps:true
});

DailyCheckInSchema.index({ user: 1, behavior: 1, date: 1 }, { unique: true });

DailyCheckInSchema.pre('validate',function(next){
    if(this.value === undefined || this.value === null){
        next(new Error('Check in value is required'));
    }else{
        next();
    }
});

const CheckIn = mongoose.model('Checkin',DailyCheckInSchema);

export default CheckIn;

