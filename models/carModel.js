const mongoose=require('mongoose');

const carSchema=new mongoose.Schema({

    car_id:{
        type:Number,
        unique:true,
        require:true
    },
    owner_id:{
        type:Number,
        require:true,
        ref:'Owner'
    },
    car_company:{

        type:String,
        require:true
    },
    car_model:{
        type:String,
        require:true
    },
    car_Number:{
        type:Number,
        require:true
    },
    car_purchasedate:{
        type:Date,
        require:true
    }
})
module.exports=mongoose.model('Car',carSchema);