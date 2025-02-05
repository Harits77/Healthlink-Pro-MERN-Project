import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    specialization: "",
  });

  const handlechange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/DoctorRegister", Form)
      .then((result) => {
        console.log(result);
        navigate("/DoctorLogin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-800">
      <div className="rounded-xl shadow-xl shadow-slate-800 bg-white p-8 md:p-10">
        <h1 className="mb-10 text-center font-bold text-2xl md:text-4xl">
          Doctor Register 
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="md:grid grid-cols-3 gap-10">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80"
                placeholder="Name"
                name="name"
                value={Form.name}
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80"
                placeholder="Email"
                name="email"
                value={Form.email}
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80 "
                placeholder="Password"
                name="password"
                value={Form.password}
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="specialization"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Specailization
              </label>
              <input
                type="text"
                id="specialization"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80 "
                placeholder="specialization"
                name="specialization"
                value={Form.specialization}
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Phone Number"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="Phone Number"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80 "
                placeholder="Phone Number"
                name="number"
                value={Form.number}
                onChange={handlechange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80"
                placeholder="Password"
                value={Form.gender}
                onChange={handlechange}
              >
                <option value="">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <button className="btn bg-blue-600 hover:bg-blue-700 text-lg rounded mt-4 w-full p-1 text-white md:p-2 text-xl">
            sumbit
          </button>
          <p className="mt-6 text-center md:text-xl">
            Already have an account?{" "}
            <Link to="/DoctorLogin" className="text-blue-800 ">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default DoctorRegister;
