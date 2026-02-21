import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthResponse, LoginPayload } from "./types";
import { axiosInstance } from "../../../configs/axiosInstance";

export const loginThunk = createAsyncThunk<
  AuthResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/login", payload, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    console.log("LOGIN RESPONSE:", response.data);
    if (!response.data) {
      return rejectWithValue("Empty response");
    }

    return {
      accessToken: response.data.accessToken || "",
      user: response.data,
    };
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});