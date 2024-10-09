const mongoose=require('mongoose');

const ownerSchema=new mongoose.Schema({
    owner_id:{
        type:Number,
        unique:true,
        require:true
    },
    owner_name:{
        type:String,
        require:true
    },
    owner_email:{
        type:String,
        require:true
    },
    owner_number:{
     type:String,
     require:true
    },
    owner_password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Owner',ownerSchema);