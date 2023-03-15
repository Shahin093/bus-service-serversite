const ReviewRating = require("../model/Review");


exports.reviewServices = async (userInfo) => {
    const user = await ReviewRating.create(userInfo);
    return user;
};


// getting by beses 
exports.gettingReviewService = async () => {
    const busesService = await ReviewRating.find({});
    return busesService;
};