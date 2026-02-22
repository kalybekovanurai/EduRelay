import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AISearchResult } from "./types";
import { axiosInstance } from "../../../configs/axiosInstance";

export const searchAIThunk = createAsyncThunk<
  AISearchResult[],
  string,
  { rejectValue: string }
>("search/ai", async (searchText, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<AISearchResult[]>("/search/ai", {
      params: { query: searchText },
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Search failed");
  }
});
