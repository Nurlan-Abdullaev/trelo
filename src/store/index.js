import authSlice from "./ redusers/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "../store/feature/todoSlice";

export default configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    todos: todoReduser,
  },
});
