const express=require('express');
const ownerRoutes=express.Router();
const createCarController=require('../controller/createOwnerController');
const authMiddleware = require('../middleware/authMiddleware');

ownerRoutes.post('/save-owner',createCarController.saveOwner);
ownerRoutes.get('/logIn',createCarController.logInOwner);

module.exports=ownerRoutes;