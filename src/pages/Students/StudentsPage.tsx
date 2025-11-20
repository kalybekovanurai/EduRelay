import { Avatar } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import type { Student } from "../../types/Student";
import {
  Major,
  Name,
  PageTitle,
  PaginationWrapper,
  SearchInput,
  Skills,
  StudentCard,
  StudentsGrid,
  StudentsWrapper,
} from "./StudentsPage.styled";

export const students: Student[] = [
  {
    id: 1,
    name: "Aizhan Bekova",
    major: "Computer Science",
    faculty: "Faculty of Engineering",
    skills: "Java, Spring, SQL",
    canTeach: "Основы Java, Backend API, SQL, DevOps",
    wantsToLearn: "DevOps",
    contacts: "aizhan@example.com",
    email: "aizhan@example.com",
    password: "aizhan123",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Timur Nursultanov",
    major: "Electrical Engineering",
    faculty: "Faculty of Energy",
    skills: "Circuit Analysis, MATLAB",
    canTeach: "Построение электрических схем, расчёты",
    wantsToLearn: "Linux",
    contacts: "timur@example.com",
    email: "timur@example.com",
    password: "timur123",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Madina Saparova",
    major: "Design",
    faculty: "Faculty of Arts",
    skills: "Figma, UI/UX, Illustrator",
    canTeach: "UX-дизайн, прототипирование",
    wantsToLearn: "3D дизайн",
    contacts: "@madina_design",
    email: "madina@example.com",
    password: "madina123",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Ermek Osmonov",
    major: "Computer Science",
    faculty: "Faculty of Engineering",
    skills: "React, Node.js, TypeScript",
    canTeach: "Frontend, React, Zustand, UI/UX",
    wantsToLearn: "Machine Learning",
    contacts: "@ermek_dev",
    email: "ermek@example.com",
    password: "ermek123",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Aruzhan Sydykova",
    major: "Business Administration",
    faculty: "Faculty of Business",
    skills: "Marketing, Excel, Project Management",
    canTeach: "SMM, реклама, презентации",
    wantsToLearn: "Data Analysis",
    contacts: "aruzhan@example.com",
    email: "aruzhan@example.com",
    password: "aruzhan123",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Rustam Moldokulov",
    major: "Information Security",
    faculty: "Faculty of IT",
    skills: "Cybersecurity, Linux, Networking",
    canTeach: "Linux, Основы безопасности",
    wantsToLearn: "Pentesting",
    contacts: "rustam@example.com",
    email: "rustam@example.com",
    password: "rustam123",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 7,
    name: "Nurbek Tursunov",
    major: "Mechanical Engineering",
    faculty: "Faculty of Engineering",
    skills: "AutoCAD, SolidWorks",
    canTeach: "3D моделирование",
    wantsToLearn: "Робототехника",
    contacts: "@nurbek_mech",
    email: "nurbek@example.com",
    password: "nurbek123",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 8,
    name: "Diana Karimova",
    major: "Psychology",
    faculty: "Faculty of Social Sciences",
    skills: "Counseling, Research",
    canTeach: "Основы психологии",
    wantsToLearn: "Нейропсихология",
    contacts: "diana@example.com",
    email: "diana@example.com",
    password: "diana123",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 9,
    name: "Amir Ergeshov",
    major: "Software Engineering",
    faculty: "Faculty of Engineering",
    skills: "Python, Django, REST",
    canTeach: "Django backend, Machine Learning",
    wantsToLearn: "Machine Learning",
    contacts: "@amir_dev",
    email: "amir@example.com",
    password: "amir123",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 10,
    name: "Janyl Janybekova",
    major: "Biology",
    faculty: "Faculty of Natural Sciences",
    skills: "Lab Work, Microscopy",
    canTeach: "Микробиология, лабораторные",
    wantsToLearn: "Генетика",
    contacts: "janyl@example.com",
    email: "janyl@example.com",
    password: "janyl123",
    avatar: "https://i.pravatar.cc/100?img=10",
  },
  {
    id: 11,
    name: "Bekzat Almazbek",
    major: "Data Science",
    faculty: "Faculty of IT",
    skills: "Machine Learning, TensorFlow",
    canTeach: "ML основы, модели, Data Science",
    wantsToLearn: "DevOps",
    contacts: "@bekzat_ds",
    email: "bekzat@example.com",
    password: "bekzat123",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 12,
    name: "Aigerim Medetova",
    major: "English Philology",
    faculty: "Faculty of Humanities",
    skills: "Teaching, Writing",
    canTeach: "Академический английский",
    wantsToLearn: "Испанский",
    contacts: "@aigerim_english",
    email: "aigerim@example.com",
    password: "aigerim123",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 13,
    name: "Samat Toktoshev",
    major: "Economics",
    faculty: "Faculty of Economics",
    skills: "Finance, Statistics",
    canTeach: "Эконометрика",
    wantsToLearn: "Инвестиции",
    contacts: "samat@example.com",
    email: "samat@example.com",
    password: "samat123",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 14,
    name: "Asel Kydyrova",
    major: "Medicine",
    faculty: "Medical Faculty",
    skills: "Anatomy, First Aid",
    canTeach: "Первая помощь",
    wantsToLearn: "Хирургия",
    contacts: "@asel_med",
    email: "asel@example.com",
    password: "asel123",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: 15,
    name: "Ilgiz Eraliev",
    major: "Computer Science",
    faculty: "Faculty of Engineering",
    skills: "C++, Algorithms",
    canTeach: "Алгоритмы, Low-level programming",
    wantsToLearn: "Алгоритмы",
    contacts: "ilgiz@example.com",
    email: "ilgiz@example.com",
    password: "ilgiz123",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 16,
    name: "Amina Toktomamatova",
    major: "Digital Marketing",
    faculty: "Faculty of Business",
    skills: "SMM, SEO",
    canTeach: "Маркетинг, таргетинг, UI/UX",
    wantsToLearn: "UI/UX",
    contacts: "@amina_marketer",
    email: "amina@example.com",
    password: "amina123",
    avatar: "https://i.pravatar.cc/100?img=16",
  },
];

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const studentsPerPage = 9;

  const filteredStudents = students.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.major.toLowerCase().includes(q) ||
      s.skills.toLowerCase().includes(q)
    );
  });

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <StudentsWrapper>
      <PageTitle>Students</PageTitle>
      <SearchInput
        placeholder="Search by name, major, skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StudentsGrid>
        {currentStudents.map((student) => (
          <StudentCard
            key={student.id}
            onClick={() => navigate(`${student.id}`)}
          >
            <Avatar src={student.avatar} />
            <Name>{student.name}</Name>
            <Major>{student.major}</Major>
            <Skills>{student.skills}</Skills>
          </StudentCard>
        ))}
      </StudentsGrid>
      <PaginationWrapper>
        <button disabled={currentPage === 1} onClick={goPrev}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={goNext}>
          Next
        </button>
      </PaginationWrapper>
      <Outlet />
    </StudentsWrapper>
  );
};

export default StudentsPage;
