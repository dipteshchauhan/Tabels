const express=require('express');
const carRoutes=express.Router();
const createCarController=require('../controller/createCarController');
const authMiddleware = require('../middleware/authMiddleware');

carRoutes.post('/save-car',authMiddleware,createCarController.saveCar);

module.exports=carRoutes;