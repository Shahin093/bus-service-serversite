const { createBusBookingService, getBusBookingsService } = require("../services/busBooking.service");


// bus booking get 
// getting 
exports.getBusBooking = async (req, res, next) => {
    try {
        //brand data getting
        const result = await getBusBookingsService();

        res.status(200).json({
            status: 'success',
            message: " all data getting the Brands ",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: 'Data is not getting',
            error: err.message
        })
        next(err);
    }
};

// inserted 
exports.createBusBooking = async (req, res, next) => {
    try {
        // Save Or Create
        //Create
        const result = await createBusBookingService(req.body);

        res.status(200).json({
            status: 'success',
            message: "Data Inserted Successfully",
            data: result
        });
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: 'Data is not inserted',
            error: err.message
        });
        next(err);
    };
};