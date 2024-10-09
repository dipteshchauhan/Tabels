const createBookingController=require('../controller/createBookingController');
const express=require('express');
const bookingRoutes=express.Router();
const middleware=require('../middleware/userAuthMiddleware')

bookingRoutes.post('/create-booking',middleware,createBookingController.createBooking);

module.exports=bookingRoutes;