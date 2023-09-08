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
    try{
    const results= await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json(
        {
        status: 'success',
        results: results.rows.length,
        Data: {
            restaurants:results.rows,
        },
});
} catch(err){console.log(err);}
});



//Get a individual restaurant
app.get('/api/v1/restaurants/:id',async(req,res) => {
    console.log(req.params.id);

    try
    {
        const results= await db.query(
        "select * from restaurants where id = $1",[req.params.id]
        );
        res.status(200).json({
            status: "success",
            data:{
                restaurant:results.rows[0],
            }
        })
    }
    catch(err)
    {
        console.log(err);
    }
});



//Create a restaurant
app.post('/api/v1/restaurants/',async(req,res) => {
    console.log(req.body);
    try{
        const results = await db.query(
        "insert into restaurants(Restaurant_name,location,price_rangeofRestaurants) values ($1,$2,$3) returning *",
        [req.body.Restaurant_name,req.body.location,req.body.price_rangeofRestaurants]
        )
            console.log(results);
        res.status(201).json({
            status: "success",
            data:{
                restaurant:results.rows[0],
            },
        });
    }
    catch(err){
        console.log(err);
    }
});



//Update a restaurant
app.put('/api/v1/restaurants/:id',async (req,res) => {
    console.log(req.body);
    try{
        const results = await db.query(
        "update restaurants set Restaurant_name = $1, location = $2, price_rangeofRestaurants = $3 where id = $4 returning *",
        [req.body.Restaurant_name, req.body.location, req.body.price_rangeofRestaurants, req.params.id])
        res.status(200).json({
            status: "success",
            data:{
                restaurant: results.rows[0],
            },
        });        
    }
    catch(err){
        console.log(err);
    }   
});



//Delete a restaurant
app.delete('/api/v1/restaurants/:id',(req,res) => {
    console.log(req.body);
    res.status(204).json({
        status: "success",
    })
});