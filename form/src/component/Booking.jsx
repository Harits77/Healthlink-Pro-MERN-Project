import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [details, setDetails] = useState({
    Slot: "",
    doctor: "",
    PhoneNumber: "",
    date:"",
  });

  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/booking", details)
      .then((result) => {
        console.log(result.data.message);
        if (result.data.message === "Booking processed successfully!") {
          alert("Booked Successfully")
          navigate("/dash ");
        } else {
          alert(result.data.message || "Please enter registered phone number");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 to-blue-400">
      <button
        className="absolute top-4 left-4 font-bold text-2xl text-white"
        onClick={() => navigate(-1)}
      >
        &#8592; Back
      </button>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-2xl rounded-lg p-10 w-full ">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Book Appointment
          </h2>

          <div className="mb-6">
            <label htmlFor="Slot1" className="block text-gray-700">
              Select Slot
            </label>
            <select
              name="Slot"
              id="Slot1"
              className="w-96 p-2 mt-2 border border-gray-500 rounded-lg"
              value={details.Slot}
              onChange={handleDetails}
            >
              <option value="">Select a Slot</option>
              <option value="9 AM to 12 PM">9 AM to 12 PM</option>
              <option value="10 AM to 12 PM">10 AM to 12 PM</option>
              <option value="4 PM to 6 PM">4 PM to 6 PM</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="Slot2" className="block text-gray-700">
              Select Doctor
            </label>
            <select
              name="doctor"
              id="Slot2"
              className="w-full p-2 mt-2 border border-gray-500 rounded-lg"
              value={details.doctor}
              onChange={handleDetails}
              required
            >
              <option value="">Select a Doctor</option>
              <option value="Dr.Prasath(Cardiology)">Dr.Prasath(Cardiology)</option>
              <option value="Dr.Madhesh(Orthology)">Dr.Madhesh(Orthology)</option>
              <option value="Dr.Velraj(Neurology)">Dr.Velraj(Neurology)</option>
            </select>
          </div>

          <div className="mb-6"> 
            <label htmlFor="date" className="block text-gray-700 ">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={details.date}
              onChange={handleDetails}
              id="date"
              placeholder="Date"
              className="w-full p-2 mt-1 border border-gray-500 rounded-lg"
              required
            />
          </div>

          <div className="mb-6"> 
            <label htmlFor="PhoneNumber" className="block text-gray-700 ">
              Enter Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              value={details.PhoneNumber}
              onChange={handleDetails}
              id="PhoneNumber"
              placeholder="Registerd phone number"
              className="w-full p-2 mt-1 border border-gray-500 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-3 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
