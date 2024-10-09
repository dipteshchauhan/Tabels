const express=require('express');
const morgan = require('morgan');
const app=express();

const mongoose=require('mongoose');

const carRoutes=require('./routes/carRoutes');
const ownerRoutes=require('./routes/ownerRoutes');
const userRoutes=require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
app.use(express.json());
app.use(morgan('dev')); 
const DB_URL='mongodb://localhost:27017/car_rent_db';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    {
        console.log("Connected to MongoDB");
    }
).catch((error)=>{
    console.log("Error while connecting to MongoDB"+error);
})

app.get('/',(req,res)=>{
    res.send("API is working");
})
app.use('/api',carRoutes);
app.use('/api',ownerRoutes);
app.use('/api',userRoutes);
app.use('/api',bookingRoutes)
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`port is running on server ${PORT}`);
})