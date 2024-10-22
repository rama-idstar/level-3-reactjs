import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import KaryawanTraining from "./pages/karyawanTraining/karyawanTraining";
import MenuTraining from "./pages/training/training";
import Rekening from "./pages/rekening/rekening";
import Karyawan from "./pages/karyawan/karyawan";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const datas = [
      {
        id: 1,
        name: "Rama",
        email:"ramadifa13@gmail.com",
        password:"123456",
        status: "Y",
        dateOfBirth: "1998-08-13",
        address: "Depok",
        nik: "1234567890123456",
        npwp: "1234567890123456",
      },
    ];
    localStorage.setItem("karyawan", JSON.stringify(datas));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/karyawan" element={<Karyawan />} />
        <Route path="/karyawan-training" element={<KaryawanTraining />} />
        <Route path="/menu-training" element={<MenuTraining />} />
        <Route path="/rekening" element={<Rekening />} />
      </Routes>
    </Router>
  );
}

export default App;
