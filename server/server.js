import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import * as db from "./db/index.js";

//const morgan = require('morgan') 
//morgan middleware
//app.use(morgan("dev"));
//custom Middleware
// app.use((req,res,next) =>{
//     console.log("middlewarew");
//     next();
// });

//built in middleware
app.use(express.json());

const port = process.env.port || 3006;
app.listen(port,() => {
    console.log(`the server is up and running on ${port}`);
});

//Routes
//Get all restaurants
app.get('/api/v1/restaurants',async(req,res) => {
    const results= await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json(
        {
        status: 'success',
        Data: {
            restaurant: ["shinwari","kfc"],
        
    },
});
});

//Get a individual restaurant
app.get('/api/v1/restaurants/:id',(req,res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data:{
            restaurant: "chai dewari"
        }
    })
});

//Create a restaurant
app.post('/api/v1/restaurants/',(req,res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data:{
            restaurant: "chai dewari"
        }
    })
});

//Update a restaurant
app.put('/api/v1/restaurants/:id',(req,res) => {
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data:{
            restaurant: "chai dewari"
        }
    })
});

//Delete a restaurant
app.delete('/api/v1/restaurants/:id',(req,res) => {
    console.log(req.body);
    res.status(204).json({
        status: "success",
    })
});

