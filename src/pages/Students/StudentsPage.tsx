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
import { searchAIThunk } from "../../stores/slices/seacrh/searchAIThunk";
import { LoadingPage } from "../../utils/loadingPage/LoadingPage";

export const StudentsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { students, loading } = useAppSelector((state) => state.student);
  const { results: aiResults, loading: aiLoading } = useAppSelector(
    (state) => state.search
  );

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 9;

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.trim().length > 0) {
      dispatch(searchAIThunk(debouncedSearch));
    }
  }, [debouncedSearch, dispatch]);

  const displayedStudents =
    debouncedSearch.trim().length > 0 ? aiResults : students;

  const data = Array.isArray(displayedStudents)
    ? displayedStudents
    : [];

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / studentsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading || aiLoading) {
    return <LoadingPage />;
  }

  return (
    <StudentsWrapper>
      <PageTitle>Студенты</PageTitle>

      <SearchInput
        placeholder="Поиск по имени, специальности, навыкам..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {debouncedSearch && data.length === 0 && (
        <p style={{ textAlign: "center" }}>
          Ничего не найдено
        </p>
      )}

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

      {data.length > studentsPerPage && (
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
      )}

      <Outlet />
    </StudentsWrapper>
  );
};