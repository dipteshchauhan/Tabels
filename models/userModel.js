//const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({

    user_id:{
        type:Number,
        require:true
    },
    user_name:{
        type:String,
        require:true
    },
    user_email:{

        type:String,
        require:true
    },
    user_number:{
        type:String,
        require:true
    },
    user_password:{
        type:String,
        require:true
    }

});
module.exports=mongoose.model('User',UserSchema)