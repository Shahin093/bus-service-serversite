const { reviewServices, gettingReviewService } = require("../services/review.service");


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

// getReviewPost
exports.getReviewPost = async (req, res, next) => {
    try {
        // getting an buses 
        const result = await gettingReviewService();
        res.status(200).json({
            status: 'Success',
            message: 'Successfully getting the REview',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Data is not getting in review',
            error: error.message
        });
    }
};