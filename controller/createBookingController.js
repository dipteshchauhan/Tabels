const bookingModel=require('../models/bookingModel');
const createCarController=require('../controller/createCarController');
const carModel=require('../models/carModel');
exports.createBooking=async (req,res)=>{

    try{
        console.log(req.body);
        const user_id=req.user_id;
        const car_number=req.body.car_id;

        const car= await carModel.findOne({car_number:car_number});

        const owner_id=car.owner_id;
        const car_id=car.car_id;
        console.log(owner_id);
        
       const bookingData={

        user_id:user_id,
        owner_id:owner_id,
        car_id:car_id,
        car_number:req.body.car_number,
        car_model:req.body.car_model

       }
       const car2= new bookingModel(bookingData);
       await car2.save();
       res.status(200).json(car2);
    }catch(error){
        console.log("got error while booking car "+error);
        res.status(400).json({message:error.message});
    }
}