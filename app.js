const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const BusBooking = require('./model/busBooking');










// verify jwt 
// function verifyJWT(req, res, next) {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         return res.status(401).send({ message: `UnAuthorized access` });
//     }
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, process.env.TOKEN_SECREC, function (err, decoded) {
//         if (err) {
//             return res.status(403).send({ message: 'Forbidden access' })
//         }
//         req.decoded = decoded;
//         next();
//     });
// }



// const verifyAdmin = async (req, res, next) => {
//     const requester = req.decoded.email;
//     const requesterAccount = await User.findOne({ email: requester });
//     if (requesterAccount.role === 'admin') {
//         next();
//     } else {
//         res.status(403).send({ message: 'forbidden' })
//     }
// }


// app.get('/service', async (req, res) => {
//     const query = {};
//     const cursor = serviceCollection.find(query).project({ name: 1 });;
//     const service = await cursor.toArray()
//     res.send(service);
// });


// app.get('/user', verifyJWT, async (req, res) => {
//     const users = await User.find().toArray();
//     res.send(users);
// });




// app.put('/user/:email', async (req, res) => {
//     const email = req.params.email;
//     const filter = { email: email };
//     const user = req.body;
//     const options = { upsert: true };
//     const updateDoc = {
//         $set: user,
//     };
//     const result = await User.updateOne(filter, updateDoc, options);
//     const token = jwt.sign({ email: email }, process.env.TOKEN_SECREC, { expiresIn: '1h' });
//     res.send({ result, token });
// });



// app.get('/admin/:email', async (req, res) => {
//     const email = req.params.email;
//     const user = await User.findOne({ email: email });
//     const isAdmin = user.role === 'admin';
//     res.send({ admin: isAdmin });

// })


// app.put('/user/admin/:email', verifyJWT, verifyAdmin, async (req, res) => {
//     const email = req.params.email;
//     const filter = { email: email };
//     const updateDoc = {
//         $set: { role: 'admin' },
//     };
//     const result = await User.updateOne(filter, updateDoc);
//     res.send(result);



// const email = req.params.email;
// const requester = req.decoded.email;
// const requesterAccount = await userCollection.findOne({ email: requester });
// if (requesterAccount.role === 'admin') {
//     const filter = { email: email };
//     const updateDoc = {
//         $set: { role: 'admin' },
//     };
//     const result = await userCollection.updateOne(filter, updateDoc);
//     res.send(result);
// } else {
//     res.status(403).send({ message: 'forbidden' })
// }
// });

// booking router 
const busBookingRouter = require('./routes/busBooking.route');
// user router 
const userRouter = require('./routes/user.route');

const busCollection = require('./routes/busCollection.route');
const buses = require('./routes/buses.route');
const User = require('./model/user');
const review = require('./routes/review.route');
// const payRouter = require('./routes/pay.route');
// const sendMainRoute = require('./routes/sendMail.route');
// const port = 3000



// send mail 


// wqzhnexjwnobgzse   ( generate passwords )

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
//busBooking route Posting and Getting to Database 
app.use('/api/v1/busBooking', busBookingRouter);

// bus  <== create ==> update ==> Delete ==> 
app.use('/api/v1/bus', buses)

// rating 
app.use('/api/v1/rating', review)
// bus collection routing 
app.use('/api/v1/busCollection', busCollection)

// bus slots routing 
// app.use('/api/v1/busCollection/slots', busCollection)

// user create 
app.use('/api/v1/user', userRouter);


// send mail 
// app.use('api/v1/register', sendMainRoute)

// payment getwaye 
// app.use('api/v1/create-payment-intent', payRouter)



module.exports = app;