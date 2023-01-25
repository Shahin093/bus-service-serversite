const BusCollection = require("../model/busCollection")

// email by getting 
exports.getBusCollectionServiceEmail = async (email) => {
    const busCollection = await BusCollection.find({ email: email });
    return busCollection;
};

// single slot count 
exports.getBusCollectionServiceSloting = async (slot, from, to, bus, dates) => {
    // const realTIme = dates.slice(0, 10);
    // console.log(bus, from, to, dates);

    // http://localhost:5000/api/v1/busCollection/slots?bus_name=CDM&&slot=10:00AM
    const busCollection = await BusCollection.find({
        slot: slot, district_from: from, district_to: to, bus_name: bus, dates: dates
    });
    return busCollection;
};

// bus collection create data 
exports.createBusCollectionService = async (data) => {
    const busColletionService = await BusCollection.create(data);
    return busColletionService;
};

// bus collection updated data 
exports.updateBusCollectionById = async (busCollectionId, data) => {
    console.log(busCollectionId);
    var busCollection = await BusCollection.findById(busCollectionId);
    const result = await busCollection.set(data).save();
    return result;
};

exports.updatedBusCollectionByIdService = async (busCollectionId, data) => {
    // console.log(busCollectionId);
    var busCollection = await BusCollection.findById(busCollectionId);
    const result = await busCollection.set(data).save();
    return result;
};


// bus colleciton deleted data by id
exports.deleteBusCollectionByIdService = async (busCollectionId) => {
    const deletedBusCollection = await BusCollection.deleteOne({ _id: busCollectionId });
    return deletedBusCollection;
}

// bus colleciton get data by id
exports.getBusCollectionByIdService = async (busCollectionId) => {
    const deletedBusCollection = await BusCollection.findById({ _id: busCollectionId });
    return deletedBusCollection;
}

// all bus
exports.getAllBusCollectionService = async () => {
    // http://localhost:5000/api/v1/busCollection/slots?bus_name=CDM&&slot=10:00AM

    const busCollection = await BusCollection.find({});
    return busCollection;
};
