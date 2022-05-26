import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import todosReducer from "./todosSlice";
import { useDispatch } from "react-redux";

// ...
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
