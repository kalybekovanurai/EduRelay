import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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

import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { getStudentsThunk } from "../../stores/slices/students/studentsThunk";
import { LoadingPage } from "../../utils/loadingPage/LoadingPage";

export const StudentsPage = () => {
  const dispatch = useAppDispatch();
  const { students, loading } = useAppSelector((state) => state.student); 
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const studentsPerPage = 9;

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  const filteredStudents = Array.isArray(students)
    ? students.filter((s) => {
        const q = search.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.major.toLowerCase().includes(q) ||
          s.skills.toLowerCase().includes(q)
        );
      })
    : [];
    
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

    if (loading) {
      return <LoadingPage/>;
    }

  return (
    <StudentsWrapper>
      <PageTitle>Студенты</PageTitle>

      <SearchInput
        placeholder="Поиск по имени, специальности, навыкам..."
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
          ❮
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button disabled={currentPage === totalPages} onClick={goNext}>
          ❯
        </button>
      </PaginationWrapper>

      <Outlet />
    </StudentsWrapper>
  );
};
