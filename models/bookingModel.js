const mongoose=require('mongoose');

const bookingSchema=mongoose.Schema({

    user_id:{
        type:Number,
        require:true,
        ref:'User'
    },
    owner_id:{
        type:Number,
        require:true,
        ref:'Owner'
    },
    car_id:{
        type:Number,
        require:true,
        ref:'Car'
    },
    car_number:{
        type:Number,
        require:true,
        ref:'Car'
    },
    car_model:{
        type:String,
        require:true,
        ref:'Car'
    }
})
module.exports=mongoose.model('Booking',bookingSchema);