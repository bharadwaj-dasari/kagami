import mongoose from "mongoose";

const BehaviorSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true
    },
    name:{
        type:String,
        required:[true,'Behavior name is required'],
        trim:true,
        maxLength:[100,'Name too long']
    },
    mode:{
        type:String,
        enum:['boolean','metric','rating','text'],
        required:true,
        immutable:true
    },
    archived:{
        type:Boolean,
        default:false
    },
    color:{
        type:String,
        default:'#e5e7eb'
    },
    sortOrder:{
        type:Number,
        default:0
    }
},{timestamps:true});

BehaviorSchema.index({user:1,archived:1,sortOrder:1});

const Behavior = mongoose.model('Behavior',BehaviorSchema);

export default Behavior;