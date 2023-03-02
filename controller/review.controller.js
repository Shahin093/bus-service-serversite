const { reviewServices } = require("../services/review.service");


// review rating post
exports.reviewPost = async (req, res, next) => {
    try {
        const review = await reviewServices(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully review  ',
            data: review
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: error.message
        });
    }
}