import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const defaultState = {
  mytodo: [],
};

export const ReduxToolKitToDo = createSlice({
  name: "MyToDo",
  initialState: defaultState,
  reducers: {
    createTodo: (state, action) => {
      const theNewTask = {
        id: uuid(),
        text: action.payload,
        isComptele: false,
        isEditMode: false,
      };
      state.mytodo.unshift(theNewTask);
    },

    resetTodo: () => {
      return defaultState;
    },

    completeTodo: (state, action) => {
      const foundTodo = state.mytodo.find((item) => {
        return item.id === action.payload;
      });
      foundTodo.isComptele = !foundTodo.isComptele;
    },

    switchTodo: (state, action) => {
      const foundTodo = state.mytodo.find((item) => {
        return item.id === action.payload;
      });
      foundTodo.isEditMode = !foundTodo.isEditMode;
    },

    deleteTodo: (state, action) => {
      const foudedTodo = state.mytodo.findIndex(
        (item) => item.id === action.payload
      );

      state.mytodo.splice(foudedTodo, 1);
    },

    editModeTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      const foundTodo = state.mytodo.find((item) => {
        return item.id === id;
      });
      foundTodo.text = updatedText;
      foundTodo.isEditMode = false;
    },
  },
});

export const {
  createTodo,
  resetTodo,
  completeTodo,
  switchTodo,
  deleteTodo,
  editModeTodo,
} = ReduxToolKitToDo.actions;

export default ReduxToolKitToDo.reducer;
