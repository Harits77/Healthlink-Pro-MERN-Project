const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  prescription: String,
  PhoneNumber: String,
  date: { type: Date},
});

const PrescriptionModel = new mongoose.model(
  "prescription",
  PrescriptionSchema
);

module.exports = PrescriptionModel;