import User from "../models/users.js";
import {OAuth2Client} from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
console.log("client");

// @desc Register user
// @route POST /api/v1/auth/register
// @access PUBLIC

export const register = async(req,res)=>{
    const {username,email,password,timezone} = req.body;
    //console.log("req read successfully");
    try{
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
            //console.log("user already exists");
        } 
        const user = await User.create({
            username,
            email,
            password,
            timezone
        });
        //console.log("User data sent to user");
        if(user){
            res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            token: user.getSignedJwtToken(),
            })
        }
    }catch(err){
        res.status(400).json({message:err.message});
        //console.log("catch error",err);
    }
};

// @desc Login user
// @route POST /api/v1/auth/login
// @access PUBLIC
export const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email}).select('+password');
        if(user && (await user.comparePassword(password))){
            res.json({
                _id:user._id,
                username:user.username,
                email:user.email,
                token:user.getSignedJwtToken()
            });
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

// @desc Get current logged in user
// @route GET /api/v1/auth/me
//@access Private

export const getme = async (req,res)=>{
    try{
        const user = await User.findById(req.user.id);
        res.status(200).json({success:true,data:user});
    }catch(err){
        res.status(500).json({success:false,message:'Server Error'});
    }
};

// @desc Login/Register via google
// @route POST /api/v1/auth/google
// @access public

export const googleAuth = async (req,res,next)=>{
    try{
        const {token} = req.body;
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience:process.env.GOOGLE_CLIENT_ID
        });
        const {name,email,picture} = ticket.getPayload();
        let user = await User.findOne({email});
        if(user){
            res.status(200).json({
                _id:user.id,
                username:user.username,
                email:user.email,
                token:user.getSignedJwtToken()
            })
        }else{
            const randomPassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
            user = await user.create({
                username: name,
                email,
                password: randomPassword,
                timezone: "UTC"
            });
            res.status(201).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                token:user.getSignedJwtToken()
            });
        }
    }catch(err){
        res.status(400).json({message:"Google Auth Failed"});
    }
};