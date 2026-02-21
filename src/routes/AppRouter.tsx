import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import ContactsPage from "../pages/Contacts/ContactsPage";
import { StudentsPage } from "../pages/Students/StudentsPage";
import { StudentProfile } from "../pages/Students/StudentProfile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/:id" element={<StudentProfile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}
