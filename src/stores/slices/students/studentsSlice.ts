import { createSlice } from "@reduxjs/toolkit";
import type { StudentsState } from "./type";
import { getStudentsThunk } from "./studentsThunk";
import { loginThunk } from "../auth/loginThunk";
import { getStudentByIdThunk } from "../OneStudent/studentThunk";

const initialState: StudentsState = {
  student: null,
  students: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsThunk.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(getStudentByIdThunk.fulfilled, (state, action) => {
        state.student = action.payload;
      });
  },
});

export default studentSlice.reducer;
