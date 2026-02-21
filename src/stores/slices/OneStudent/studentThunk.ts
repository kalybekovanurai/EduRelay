import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Student } from "../../../types/Student";
import { axiosInstance } from "../../../configs/axiosInstance";

export const getStudentByIdThunk = createAsyncThunk<
  Student,
  number,
  { rejectValue: string }
>("student/{students_id}", async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Student>(`/students/${id}`);

    return response.data;
  } catch (error: any) {
    return rejectWithValue("Student not found");
  }
});
