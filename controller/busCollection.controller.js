const { createBusCollectionService, getBusCollectionServiceEmail, getBusCollectionServiceSloting, updateBusCollectionById, deleteBusCollectionByIdService, getBusCollectionByIdService, getAllBusCollectionService, updatedBusCollectionByIdService } = require("../services/busCollection.service");


exports.getBusCollection = async (req, res, next) => {
    try {
        const email = req.query.email;
        // console.log(email);
        // const district_from = req.query.district_from;
        // const district_to = req.query.district_to;
        // var datetime = new Date();
        // console.log(datetime);
        // console.log(datetime.toISOString().slice(0, 10));
        // bus collection Data 
        // http://localhost:5000/api/v1/busCollection?district_from=Feni&&district_to=Chittagong 
        const result = await getBusCollectionServiceEmail(email);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "All Data getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
}
// getBySignleSlot 
exports.getBySignleSlot = async (req, res, next) => {
    try {
        const slot = req.query.slot;
        const from = req.query.from;
        const to = req.query.to;
        const bus = req.query.bus_name;
        const dates = req.query.dates;
        // const real = dates.slice(0, 10);
        // console.log(slot, from, to, bus, dates);
        // const dates = req.query.dates;
        // console.log(slot, bus);
        // var datetime = new Date();
        // const datesss = "2022-12-11T16:30:36.269Z";
        // console.log(datesss.slice(0, 10));
        // console.log(new Date().toISOString().slice(0, 10));
        // bus collection Data 
        // http://localhost:5000/api/v1/busCollection?district_from=Feni&&district_to=Chittagong 
        const result = await getBusCollectionServiceSloting(slot, from, to, bus, dates);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "Single slot getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
}
exports.createBusCollection = async (req, res, next) => {
    try {
        //Create
        const result = await createBusCollectionService(req.body);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "All Data getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
};


// bus collection updated 
exports.busCollectionUpdatedById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const result = await updatedBusCollectionByIdService(id, req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully Updated',
            updateData: result

        })

    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Could not updated the Bus Booking',
            error: err.message
        })
    }
};
// get by id 
exports.busCollectionGetById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const result = await getBusCollectionByIdService(id, req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully Updated',
            data: result
        });

    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Could not get Data the Bus Booking',
            error: err.message
        })
    }
};

// bus collection deleted 
exports.busCollectonDeletedById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await deleteBusCollectionByIdService(id);
        console.log(result);
        if (!result.deletedCount) {
            return res.status(400).json({
                status: 'Fail',
                message: 'Could not the Bus Collection'
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Successfully Deleted the Bus Collection'
        });

    } catch (error) {
        res.status(401).json({
            status: 'Fail',
            message: 'Could not Deleting the Bus',
            error: error.message
        });
    }
}


// all bus collection today
exports.allBusCollectionToday = async (req, res, next) => {
    try {


        const result = await getAllBusCollectionService();


        res.status(200).json({
            status: 'Success',
            message: 'Successfully all the Bus Collection',
            data: result
        });

    } catch (error) {
        res.status(401).json({
            status: 'Fail',
            message: 'Could not all the Bus collection.',
            error: error.message
        });
    }
}

