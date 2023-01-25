const BusBooking = require("../model/busBooking");

// all data getting 
exports.getBusBookingsService = async () => {
    const busBooking = await BusBooking.find({});
    return busBooking;
}

// create bus Booking 
exports.createBusBookingService = async (data) => {
    const busBooking = await BusBooking.create(data);

    // update Brand and populate 
    // const { _id, brand } = product;
    // update Brand 
    // const res = await Brand.updateOne(
    //     { _id: brand.id },
    //     { $push: { products: _id } }
    // )

    return busBooking;
};