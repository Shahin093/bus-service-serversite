
// const stripe = require("stripe");
// (process.env.STRIPE_SECRET_KEY)
exports.paymentService = async (service) => {
    // const user = await User.create(userInfo);

    const price = service?.price;
    const amount = price * 100;

    const paymentIntent = await stripe?.paymentIntents?.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ['card']
    });
    // res.send({ clientSecret: paymentIntent?.client_secret })

    return { clientSecret: paymentIntent?.client_secret };
};