import { createStore } from "redux";

const initialState = {
  todoName: "",
  showInput: false,
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (action.payload.trim()) {
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          todoName: "",
          showInput: false,
        };
      }
      return state;
    case "UPDATE_TODO_NAME":
      return {
        ...state,
        todoName: action.payload,
      };
    case "SHOW_INPUT":
      return {
        ...state,
        showInput: true,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
