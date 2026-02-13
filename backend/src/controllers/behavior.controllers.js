import Behavior from "../models/Behavior.js";

// @desc    Get ALL behaviors (Active & Archived)
// @route   GET /api/v1/behaviors
// @access  Private
// @note    Frontend filters 'archived: false' for Today View, uses all for History.
export const getBehaviors = async (req,res)=>{
    try{
        const behaviors = await Behavior.find({user:req.user.id}).sort({sortOrder:1,createdAt:-1});
        res.status(200).json({success:true,count:behaviors.length,data:behaviors});
    }catch(err){
        res.status(400).json({message:err.message});
    }
};


// @desc    Create a new lens
// @route   POST /api/v1/behaviors
// @access  Private
export const createBehavior = async (req,res)=>{
    try{
        const {name,mode,color} = req.body;

        const behavior = await Behavior.create({
            user:req.user.id,
            name,
            mode,
            color
        });
        res.status(201).json({success:true,data:behavior});
    }catch(err){
        res.status(401).json({message:err.message});
    }
};


// @desc    Update metadata (Name, Color, Archive status)
// @route   PUT /api/v1/behaviors/:id
// @access  Private
// @note    SILENTLY IGNORES 'mode' changes.
export const updateBehavior = async(req,res)=>{
    try{
        let behavior = await Behavior.findById(req.params.id);
        if(!behavior){
            return res.status(404).json({message:"Behavior not found"});
        }

        if(behavior.user.toString()!== req.user.id){
            return res.status(401).json({message:"Not authorized"});
        }

        const {name,color,archived,sortOrder}=req.body;
        behavior.name = name || behavior.name;
        behavior.color = color || behavior.color;
        behavior.sortOrder = sortOrder !== undefined?sortOrder:behavior.sortOrder;

        if(archived !== undefined){
            behavior.archived = archived;
        }

        await behavior.save();

        res.status(200).json({success:true,data:behavior});
    }catch(err){
        res.status(400).json({message:err.message});
    }
};

// @desc    Hard Delete (Nuclear Option)
// @route   DELETE /api/v1/behaviors/:id
// @access  Private
// @note    Only use if user made a typo instantly. 
//          Warn frontend: "This deletes all history for this habit".
export const deleteBehavior = async(req,res)=>{
    try{
        const behavior = await Behavior.findById(req.params.id);
        if(!behavior){
            return res.status(404).json({message:"Behavior not found"});
        }

        if(behavior.user.toString() !== req.user.id){
            return res.status(401).json({message:"Not Authorized"});
        }

        await behavior.deleteOne();
        res.staus(200).json({success:true,message:"Behavior deleted Successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}