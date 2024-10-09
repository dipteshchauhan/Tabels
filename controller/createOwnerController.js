const ownerModel=require('../models/ownerModel');
const jwt=require('jsonwebtoken');
exports.saveOwner=async (req,res)=>{

    try{
        const ownerData=new ownerModel(req.body);
        console.log(req.body);
        await ownerData.save();

        res.status(200).json(ownerData);
    }catch(error){

        console.log("got error in saveCar "+error);
        res.status(400).json({message:error.message});
    }
}

exports.logInOwner=async (req,res)=>{
    try{

        const email=req.body.owner_email;
        const password=req.body.owner_password;
        console.log(password);
        const owner=await ownerModel.findOne({owner_email:email});
        console.log(owner);
        if(owner.owner_password==password){
            console.log("Log In Succesfull");
            const token = jwt.sign({email: owner.owner_email,owner_id: owner.owner_id }, 'your_secret_key', { expiresIn: '1h' });
            res.status(200).json({token});
        }  else{
            console.log("Log In Unseucessful");
            res.status(400).json({message:wrongcrentials});
        } 
    }catch(error){
        console.log("logInOwner controller "+error);
        res.status(400).json({message:error.message});
    }
}
