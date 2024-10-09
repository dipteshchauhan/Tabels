const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    const token=req.header('Authorization')?.split(' ')[1];

    if(!token){
        res.status(400).json({message:"No token is provided"});
    }
    try{

        const decode=jwt.verify(token,'user_token_key');
        console.log(decode);
        req.user_id=decode.user_id;
        next();
    }catch(error){
        console.log("Error in user token vrification "+error);
        res.status(400).json({message:error.message});
    }
}