import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../../../configs/axiosInstance";
import type { Students } from "../students/type";

export const getStudentByIdThunk = createAsyncThunk<
  Students,
  number,
  { rejectValue: string }
>("student/{students_id}", async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Students>(`/students/${id}`);

    return response.data;
  } catch (error: any) {
    return rejectWithValue("Student not found");
  }
});
