import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    number: "",
    gender: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };
  console.log(Form);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/register", Form)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
     .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-800">
      <div className="rounded-xl shadow-xl shadow-slate-800 bg-white p-8 md:p-10">
        <h1 className="mb-10 text-center font-bold text-2xl md:text-4xl">
          Register Form
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
                htmlFor="age"
                className="block mb-2 font-semibold text-lg md:text-xl"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="h-9 w-64 form-control border border-black rounded p-2 md:w-80 "
                placeholder="age"
                name="age"
                value={Form.age}
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
            <Link to="/login" className="text-blue-800 ">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
