const express = require('express');
const connectDB = require('./DB/Connection');
const createErrors = require('http-errors');

const dotenv = require('dotenv').config();



const app = express();

//Middleware 

app.use(express.json({extended: false}));

// const port = process.env.port || 3000;

connectDB();

const ProductRoute = require('./Routes/Product.route');

app.use('/products', ProductRoute);


app.use((req, res, next)=>{
    next(createErrors(404, "Not found"));
});

// Error handler

app.use((err,req, res, next)=>{

    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    });
});


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log( 'Server is running on port'+" "+ PORT +" "+ '....');
});





//===============================================================

// 1- Send query string 

// app.all('/test', (req, res)=>{
//     console.log(req.query);
//     res.send(req.query);
// })


// 2-  Pass route parameters 

// app.all('/test/:id', (req, res)=>{
//     console.log(req.params );
//     res.send(req.params);
// });


// 3- Request Body

// app.all('/', (req,res)=>{
//         res.send(req.body);
//     });




// Middleware for Form URL encoded form body

//app.use(express.urlencoded({extended:true}));