require('dotenv').config()
const express = require('express');
const app = express();

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
app.get('/api/v1/restaurants',(req,res) => {
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
});

//Create a restaurant
app.post('/api/v1/restaurants/',(req,res) => {
    console.log(req.body);
});

//Update a restaurant
