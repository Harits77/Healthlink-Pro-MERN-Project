import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPrescription = () => {
  const [details, setDetails] = useState({
    prescription: "",
    PhoneNumber: "",
    date: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/prescription", details)
      .then((result) => {
        console.log(result);
        navigate("/DoctorDash");
      })
      .catch((err) => console.log(err));
  };

  console.log(details);

  const handleBack = () => {
    navigate("/DoctorDash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-400 flex items-center justify-center p-4">
       <button
        onClick={handleBack}
        className="absolute top-4 left-4 font-bold text-2xl text-white"
      >
        &#8592; Back
      </button>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Add Prescription
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg"
            value={details.PhoneNumber}
            onChange={handleDetails}
            name="PhoneNumber"
            type="text"
            placeholder="Mobile Number"
          />
          <input
            className="w-full p-3 mt-6 border border-gray-600 rounded-lg"
            value={details.Date}
            onChange={handleDetails}
            name="date"
            type="date"
            placeholder="Date"
          />
          <textarea
            className="w-full p-10 mt-6 border border-gray-600 rounded-lg"
            name="prescription"
            value={details.prescription}
            onChange={handleDetails}
            required
            placeholder="Enter the Prescription"
          ></textarea>
          <button
            className=" bg-blue-500 mt-6 w-full rounded text-white text-xl hover:bg-blue-600 p-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPrescription;
