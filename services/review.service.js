const ReviewRating = require("../model/Review");


exports.reviewServices = async (userInfo) => {
    const user = await ReviewRating.create(userInfo);
    return user;
};