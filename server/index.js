const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const PatientModel = require("./models/Patient.js");
const BookingModel = require("./models/Booking.js");
const DoctorModel = require("./models/Doctor.js");
const PrescriptionModel = require("./models/Prescription.js")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/healthlink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", async (req, res) => {
  const { name, email, password, number, gender, age } = req.body;
  console.log(number);
  const hashedPassword = await bcrypt.hash(password, 10);
  PatientModel.create({
    name,
    email,
    password: hashedPassword,
    number,
    gender,
    age,
  })
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  PatientModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (bcrypt.compare(password, user.password)) {
          res.json({
            message: "Login Successfull",
            userId: user._id,
          });
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("No user found");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/getUser", (req, res) => {
  const { id } = req.body;
  PatientModel.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/booking", async (req, res) => {
  try {
    const { Slot, doctor, PhoneNumber, date } = req.body;
    PatientModel.findOne({ number: PhoneNumber }).then(async (user) => {
      if (user) {
        if (user.number == PhoneNumber) {
          const newBooking = new BookingModel({
            Slot,
            doctor,
            PhoneNumber,
            date,
          });
          const savedBooking = await newBooking.save();
          res.status(200).json({
            message: "Booking processed successfully!",
            savedBooking,
          });
        }
      } else {
        res.json("No user found");
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/getAppointments", async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  try {
    UserId = new mongoose.Types.ObjectId(userId);
    console.log(UserId);
    const user = await PatientModel.findById(userId);
    const user_booking = await BookingModel.find({
      PhoneNumber: String(user.number),
    });

    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    if (user.number === user_booking[0].PhoneNumber) {
      res.status(200).json(user_booking);
    } else {
      console.log("Phone Number does not matched");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Mongo error" });
  }
});

app.post("/DoctorLogin", (req, res) => {
  const { email, password } = req.body;
  DoctorModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "Login Successfull",
            userId: user._id,
          });
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("No user found");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/DoctorRegister", (req, res) => {
  DoctorModel.create(req.body)
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

app.post("/getdoctor", (req, res) => {
  const { id } = req.body;
  DoctorModel.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/ViewPatientAppiontments", async (req, res) => {
  try {
    const booking = await BookingModel.find({ doctor: "Dr.Madhesh(Orthology)" });
    console.log(booking);
    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Mongo error" });
  }
}); 

app.post("/prescription", (req, res) => {
  PrescriptionModel.create(req.body)
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

app.post("/ViewPrescriptions", async (req, res) => {
  const { userId } = req.body;
  try {
    UserId = new mongoose.Types.ObjectId(userId);
    const user = await PatientModel.findById(userId);
    const prescriptions = await PrescriptionModel.find({
      PhoneNumber: String(user.number),
    });
    if (userId.number === prescriptions[0].PhoneNumbe) {
      console.log("Prescription sent");
      res.status(200).json(prescriptions);
    } else {
      console.log("Prescription not sent");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4001, () => {
  console.log("Server is running");
});
