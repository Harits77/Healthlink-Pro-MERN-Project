import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewPrescriptions() {
  const [prescription, setPrescription] = useState([]);
  const navigate = useNavigate();
  console.log(prescription);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (!userId) {
      navigate("/dash");
      return;
    }

    axios
      .post("http://localhost:4001/ViewPrescriptions", { userId })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          navigate("/dash");
        } else {
          setPrescription(response.data);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to fetch Prescription");
        navigate("/dash");
      });
  }, [navigate]);
  
  const handleBack = () => {
    navigate("/dash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-400 flex items-center justify-center">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 font-bold text-2xl text-white"
      >
        &#8592; Back
      </button>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Prescription
        </h2>
        <div className="space-y-4">
          {prescription.map((prescription) => (
            <div
              key={prescription._id}
              className="p-4 bg-cyan-300 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">Date: {prescription.date}</p>
                <p className="text-lg font-medium" id="prescription">
                  Prescription: {prescription.prescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewPrescriptions;
