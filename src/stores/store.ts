import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import authSlice from "./slices/auth/loginSlice";
import studentSlice from "./slices/students/studentsSlice";
import searchSlice from "./slices/seacrh/searchSlice"

const rootReducer = combineReducers({
  auth: authSlice,
  student: studentSlice,
  search: searchSlice,
});

const persistConfig = {
  key: "EduRelay",
  storage,
  whitelist: ["auth"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
