const { createBusesService, gettingBusesService, updateBusByIdService } = require("../services/buses.service");


// creating an buses 
exports.createBuses = async (req, res, next) => {
    try {
        // Create an buses 
        const result = await createBusesService(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully inserted ',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Data is not inserted in buses',
            error: error.message
        })
    }
}
// getting an buses 
exports.getBuses = async (req, res, next) => {
    try {
        // getting an buses 
        const result = await gettingBusesService();
        res.status(200).json({
            status: 'Success',
            message: 'Successfully getting the Buses',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Data is not getting in buses',
            error: error.message
        });
    }
};

// update bus by ID 
exports.updateBusById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateBusByIdService(id, req.body);
        res.status(200).json({
            status: "Success",
            message: "Successfully Updated",
            updatedData: result
        });
    } catch (error) {
        res.staus(401).json({
            status: "Fail",
            message: "Could not update the Bus",
            error: error.message
        })
    }
}

// bus deleted by id 
exports.deleteBusById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await deleteBusByService(id);
        if (!result.deletedCount) {
            return res.status(400).json({
                status: "Fail",
                error: "Could not the bus"
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully Deleted the bus"
        });



    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Could not deleting the bus",
            error: error.message
        });
    }
}