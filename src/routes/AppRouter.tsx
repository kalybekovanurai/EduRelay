import { Route, Routes } from "react-router-dom";
import { StudentsPage } from "../pages/Students/StudentsPage";
import { StudentProfile } from "../pages/Students/StudentProfile";
import { About } from "../pages/About/About";
import { ContactsPage } from "../pages/Contacts/ContactsPage";
import { Home } from "../components/home/Home";

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
