import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        unique:true,
        trim:true,
        minlength:[3,'Username must be at least 3 chars'],
        maxlength:[20,'Username cannot exceed 20 chars'],
        match:[/^[a-zA-Z0-9_]+$/,'Username can only contain letters, numbers, and underscores']    
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true,
        trim:true,
        match:[/\S+@\S+\.\S+/,'Email format is invalid']
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[8,'Password must be atleast 8 chars'],
        select:false
    },
    timezone:{
        type:String,
        required:true,
        default:'UTC'
    }
},{timestamps:true});

//hasing before saving
UserSchema.pre('save',async function(){
    if(!this.isModified('password'))return;
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        
    }catch(err){
        console.log("Error creating user",err);
    }
});

//password verification
UserSchema.methods.comparePassword = async function(canditatePassword){
    return bcrypt.compare(canditatePassword,this.password);
}

//generate JWT
UserSchema.methods.getSignedJwtToken = function(){
    return jwt.sign(
        {id:this._id},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRE}
    );
};

const User = mongoose.model('User',UserSchema);

export default User;