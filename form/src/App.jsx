import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Booking from "./component/Booking";
import ViewAppointment from "./component/ViewAppointment";
import DoctorLogin from "./component/DoctorLogin"
import DoctorRegister from "./component/DoctorRegister"
import DoctorDash from "./component/DoctorDash";
import ViewPatientAppointment from "./component/ViewPatientAppointment";
import AddPrescription from "./component/AddPrescription";
import ViewPrescription from "./component/ViewPrescription"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/ViewAppointment" element={<ViewAppointment/>} />
          <Route path='/DoctorRegister' element={<DoctorRegister />}></Route>
          <Route path='/DoctorLogin' element={<DoctorLogin />}></Route>
          <Route path="/DoctorDash" element={< DoctorDash/>} />
          <Route path='/ViewPatientAppointment' element={<ViewPatientAppointment/>} /> 
          <Route path="/AddPrescription" element={<AddPrescription />}></Route>
          <Route path='/ViewPrescription' element={<ViewPrescription />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
