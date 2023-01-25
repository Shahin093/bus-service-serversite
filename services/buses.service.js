const Buses = require("../model/buses")

exports.createBusesService = async (data) => {
    console.log(data);
    const buses = await Buses.create(data);
    return buses;
};

// getting by beses 
exports.gettingBusesService = async () => {
    const busesService = await Buses.find({});
    return busesService;
};

// updated by ID in buses 
exports.updateBusByIdService = async (busId, data) => {
    const bus = await Buses.findById(busId);
    const result = await bus.set(data).save();
    return result;
};

// deleted by ID in buses
exports.deleteBusByService = async (id) => {
    const result = await Buses.deleteOne({ _id: id });
    return result;
}