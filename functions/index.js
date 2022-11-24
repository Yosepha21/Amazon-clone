// const functions = require("firebase-functions");

// const express=require("express")
// const cors=require("cors")
// const stripe=require('stripe')(
//     'sk_test_51LxloQSD7OnSGYs9V3tfYoBTXb4HQjqvGKcs0rrlA7w13jDKxaekZvCUfPqql1NMTIGOtWO7uFR0iquARqgWUV1s00UTgCzmBg'
// );
// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());
// app.get('/', (request, response) => response.status(200).send('hello world'));


// app.post('/payments/create', async (request, response) => {
//     const total = request.query.total;
  
//     console.log('Payment Request Recieved for this amount >>> ', total);
  
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, // subunits of the currency
//       currency: 'usd',
//     });
// })
  
    
//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });



// // - Listen command
// exports.api = functions.https.onRequest(app);

// // base_url=
// // http://127.0.0.1:5001/clone-8f24d/us-central1/api

// // app.use(function (request, response, next) {
// //   response.header("Access-Control-Allow-Origin", "*");
// //   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   next();
// // });



const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');


const stripe = require('stripe')('sk_test_51LxloQSD7OnSGYs9V3tfYoBTXb4HQjqvGKcs0rrlA7w13jDKxaekZvCUfPqql1NMTIGOtWO7uFR0iquARqgWUV1s00UTgCzmBg');

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const getTotal = request.query.total
    console.log('Payment request recieved for this amount', getTotal);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: getTotal,
        currency: 'usd',
    });

    //Ok / Created
response.status(201).send({
    clientSecret: paymentIntent.client_secret,

})

})
// Listen command
exports.api = functions.https.onRequest(app);