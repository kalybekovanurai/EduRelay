import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import StudentsPage from "../pages/StudentsPage";
import Navbar from "../components/Navbar/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
