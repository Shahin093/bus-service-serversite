
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
                "13:00PM",
                "14:00PM",
                "15:00PM",
                "16:00PM",
                "17:00PM",
                "18:00PM",
                "19:00PM",
                "20:00PM",
                "21:00PM",
                "22:00PM",
                "23:00PM",
                "24:00PM",
                "6:00AM",
                "7:00AM",
                "8:00AM",
                "9:00AM",
                "10:00AM",
                "11:00AM",
                "12:00AM",

            ],

            message: "slot value can not be {VALUE}, must be available"
        }
    },
    booked: {
        type: Array,
        // required: [true, 'Please Selete your seat ?'],
        default: []
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
    pay: {
        type: String,
        default: "unPaid"
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