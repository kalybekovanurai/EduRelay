import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../configs/axiosInstance";
import type { Students } from "./type";

export const getStudentsThunk = createAsyncThunk<
  Students[],
  void,
  { rejectValue: string }
>("/students", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Students[]>("/students");
    console.log("SERVER DATA:", response.data); 
    return response.data;
  } catch (error: any) {
    return rejectWithValue("Failed to fetch students");
  }
});
