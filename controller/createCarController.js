const carModel=require('../models/carModel');

exports.saveCar=async (req,res)=>{


    try{
        const owner_id = req.owner_id;
        console.log( req.owner_id);
        const carData = {
            car_id: req.body.car_id,
            car_company: req.body.car_company,
            car_model: req.body.car_model,
            car_number: req.body.car_number,
            car_purchasedate: req.body.car_purchasedate,
            owner_id: owner_id  
        };
        const addCar=new carModel(carData);
        await addCar.save();
        res.status(200).json(carData);
    }catch(error){

        console.log("got error in saveCar "+error);
        res.status(400).json({message:error.message});
    }
}

exports.deleteCar=async (req,res)=>{

    try{
        
    }catch(error){

    }
}

