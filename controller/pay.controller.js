const { paymentService } = require("../services/pay.services");

// user sign up 
exports.paymentGetway = async (req, res, next) => {
    try {
        console.log(req.body)
        const pay = await paymentService(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully sign up ',
            data: pay

        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: error.message
        });
    }
}