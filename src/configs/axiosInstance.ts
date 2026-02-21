import axios, { AxiosError, type AxiosInstance } from "axios";
import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

const BASE_URL = "https://nonfissile-pomaceous-anita.ngrok-free.dev";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

let customStore: Store<RootState> | undefined;

export const injectStore = (store: Store<RootState>) => {
  customStore = store;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const updateConfig = { ...config };

    const token = customStore?.getState().auth.accessToken;

    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }
    return updateConfig;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error),
);
