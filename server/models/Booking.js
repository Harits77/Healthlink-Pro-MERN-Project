const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    Slot:  String,
    doctor: String,
    date: { type: Date, default: Date.now },
    PhoneNumber: String
})

const BookingModel = new mongoose.model("booking", BookingSchema);

module.exports = BookingModel;