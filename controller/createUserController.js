const userModel=require('../models/userModel');
const jwt=require('jsonwebtoken');
exports.saveUser=async (req,res)=>{
    try{

        const user=new userModel(req.body);
        await user.save();
        res.status(200).json(user);
    }catch(error){
        console.log("error while saving user"+error);
        res.status(400).json({message:error.message});
    }
}

exports.userLogIn=async (req,res)=>{
    try{
        const email=req.body.user_email;
        const password=req.body.user_password;
        console.log(password);
        const user=await userModel.findOne({user_email:email});
        if(!user){

            res.status(400).json({message: "user not found"});
        }
        if(user.user_password==password){

            console.log("LogIn Successful");
            const token=jwt.sign({email:user.user_email,user_id:user.user_id},'user_token_key',{expiresIn:'1h'});
            res.status(200).json(token);
        }else{
            res.status(400).send("Wrong password");
        }
    }catch(error){
        console.log("Got error in user log in "+error);
        res.status(400).json({message:error.message});
    }
}

exports.userSample=async (req,res)=>{
    try{

        console.log("Can access this api with token");
        res.status(200).json({message:"Can access this api with token"});

    }catch(error){

        console.log(error);
        res.status(400).json({message:error.message});
    }
}