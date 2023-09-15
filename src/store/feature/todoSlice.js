import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const { id, text } = payload;
      state.todo.push({
        id,
        text,
        completed: false,
        task: [],
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    addInnerTodo: (state, { payload }) => {
      const { todoId, innerTask } = payload;
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === todoId.todoId) {
            return {
              ...item,
              task: [...item.task, innerTask],
            };
          }
          return item;
        }),
      };
    },
  },
});

export const { addTodo, deleteTodo, addInnerTodo } = todoSlice.actions;

export default todoSlice.reducer;
