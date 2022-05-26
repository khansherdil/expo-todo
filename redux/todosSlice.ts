import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../@types";

const typedCollection: Array<ITodo> = [];
const initialState = {
  todos: typedCollection,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
    addTodoReducer: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    hideCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
  },
});

export default todoSlice.reducer;
export const {
  setTodos,
  addTodoReducer,
  deleteTodo,
  hideCompleted,
  updateTodo,
} = todoSlice.actions;
