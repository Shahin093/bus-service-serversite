const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const nodemailer = require("nodemailer");
const app = require("./app");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successful `.red.bold);
});

// server
const port = process.env.PORT || 8080;

app.post("/api/v1/register", (req, res) => {
    // console.log('shahin')
    const { email } = req.body;
    // console.log(email)


    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Sending Email With Bus Regerbration",
            html: '<h1>Congratulation</h1> <h1> You successfully seat confirm okay. </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({ status: 201, info })
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({ status: 401, error })
    }
});

// payment getwaye
app.post('/create-payment-intent', async (req, res, next) => {
    const service = req.body;
    // console.log('service', service)
    const price = service?.price;
    const amount = price * 100;
    try {
        const paymentIntent = await stripe?.paymentIntents?.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ['card']
        });
        // console.log('payment Intent : ', paymentIntent);
        res.status(201).json({ clientSecret: paymentIntent?.client_secret })
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({ status: 401, error })
    }

});

app.listen(port, () => {
    console.log(`app is running on port ${port} `.yellow.bold)
});
