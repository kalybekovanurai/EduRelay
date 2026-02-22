import { createSlice } from "@reduxjs/toolkit";
import type { SearchState } from "./types";
import { searchAIThunk } from "./searchAIThunk";


const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAIThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchAIThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchAIThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
