import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./types";
import { loginThunk } from "./loginThunk";

const initialState: AuthState = {
  isAuth: false,
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuth = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload?.user) {
          state.user = {
            id: action.payload.user.id,
            name: action.payload.user.name,
            email: action.payload.user.email,
            avatar: action.payload.user.avatar,
          };

          state.accessToken = action.payload.accessToken;
          state.isAuth = true;

          localStorage.setItem("token", action.payload.accessToken);
        } else {
          state.error = "User data is missing";
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;