
const { default: mongoose } = require("mongoose");

const busCollectionSchema = mongoose.Schema({

    bus_name: {
        type: String,
    },
    customer_name: {
        type: String,
    },
    email: {
        type: String
    },
    district_from: {
        type: String,
        required: true,
        enum: {
            values: [
                "Dhaka",
                "Cumilla",
                "Feni",
                "Chittagong"
            ],
            message: "slot value can not be {VALUE}, must be available"
        }
    },
    district_to: {
        type: String,
        required: true,
        enum: {
            values: [
                "Dhaka",
                "Cumilla",
                "Feni",
                "Chittagong"
            ],
            message: "slot value can not be {VALUE}, must be available"
        }
    },
    slot: {
        type: String,
        required: true,
        enum: {
            values: [
                "9:00AM",
                "10:00AM",
                "11:00AM",
                "12:00PM",
                "1:00PM",
                "2:00PM",
                "3:00PM",
                "4:00PM",
                "5:00PM",
                "6:00PM",
                "7:00PM",
                "8:00PM",
                "9:00PM",
                "10:00PM"
            ],

            message: "slot value can not be {VALUE}, must be available"
        }
    },
    booked: {
        type: Array,
        default: [],
    },
    totalSeat: {
        type: Number
    },
    seat: {
        type: Number,
    },
    amount: {
        type: Number,

    },
    status: {
        type: String,
        default: "active"

    },
    driver_staff: {
        type: Number,
        default: 2
    },
    counter_phone_number: {
        type: String
    },
    passenger_phone_number: {
        type: String
    },
    dates: {
        type: String,
        // default: new Date().toISOString().slice(0, 10)
    },

    CreateAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    },
    img: {
        type: String,

    }

}, {
    timestamps: true,
});

// SCHEMA ---> MODEL  --> QUERY

// Creating Model 
const BusCollection = mongoose.model('BusCollection', busCollectionSchema);
module.exports = BusCollection;