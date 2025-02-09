import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
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

    if (!Form.email || !Form.password) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:4001/login", Form)
      .then((result) => {
        console.log(result.data); 
        if (result.data.message === "Login Successfull") {
          localStorage.setItem("userId", result.data.userId);
          navigate("/dash");  
        } 
        else if(result.data.message === "No user found"){
           alert("user not found")
         }        
        else {
          alert("email or password incorrect");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while logging in. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-800">
      <div className="rounded-xl shadow-xl shadow-slate-800 bg-white p-8  md:p-10">
        <h1 className="mb-10 text-center font-bold text-2xl md:text-4xl">
          Patinet Login 
        </h1>
        <form onSubmit={handleSubmit}>
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
              className="h-9 w-64 form-control border border-black rounded p-2 md:w-80 "
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
              className="h-9 w-64 form-control rounded border border-black p-2 md:w-80"
              placeholder="Password"
              name="password"
              value={Form.password}
              onChange={handlechange}
            />
          </div>
          <button className="btn bg-blue-800 hover:bg-blue-700 text-lg rounded mt-4 w-full p-1 text-white md:p-2 text-xl">
            sumbit
          </button>
          <div className="mt-4 text-center md:text-lg">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-800 ">
                Register
              </Link>
            </p>
            <p className="mt-2">
              <Link to="/">Back to Home</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
