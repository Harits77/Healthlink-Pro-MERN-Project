import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ViewPatientAppiontments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  axios
    .post("http://localhost:4001/ViewPatientAppiontments", {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setAppointments(response.data);
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to fetch appointments");
      navigate("/DoctorDash");
    });

  const handleBack = () => {
    navigate("/DoctorDash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-400 flex items-center justify-center p-4">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 text-2xl text-white font-bold"
      >
        &#8592; Back
      </button>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Your Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className="text-center text-xl text-gray-700">
            No appointments booked yet.
          </p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="p-4 bg-cyan-300 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-xl font-medium">
                    Doctor: {appointment.doctor}
                  </p>
                  <p className="text-lg mt-2 text-gray-700">
                    Date: Today {appointment.date}
                  </p>
                  <p className="text-lg mt-2 text-gray-700">
                    Time: {appointment.Slot}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ViewPatientAppiontments;
