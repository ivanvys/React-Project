import { handleActions } from "redux-actions";
import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions";
import { v4 as uuid } from "uuid";

const defaultState = {
  todos: [],
  prev: [],
};

// ----------------------------------------------------------------------without TOOLKIT
export const CreateToDoList = handleActions(
  {
    [actions.CREATE_TASK]: (state, action) => {
      const copyToDoList = [...state.todos];
      const newTask = {
        id: uuid(),
        text: action.payload,
        isComplete: false,
        isEditMode: false,
      };
      copyToDoList.unshift(newTask);
      return {
        ...state,
        todos: copyToDoList,
      };
    },

    [actions.RESET_ALL_TASKS]: () => {
      return defaultState;
    },

    [actions.ISCOMPLETE_TASK]: (state, action) => {
      const copyToDoList = [...state.todos];
      const foundToDoList = copyToDoList.find(
        (item) => item.id === action.payload
      );
      foundToDoList.isComplete = true;
      return {
        prev: copyToDoList,
        todos: copyToDoList,
      };
    },

    [actions.DELETE_TASK]: (state, action) => {
      const copyToDoList = [...state.todos];
      const foundToDoList = copyToDoList.findIndex(
        (item) => item.id === action.payload
      );
      copyToDoList.splice(foundToDoList, 1);
      return {
        ...state,
        todos: copyToDoList,
      };
    },

    [actions.TOGGLE_TASK]: (state, action) => {
      const copyToDoList = [...state.todos];
      const foundToDoList = copyToDoList.find(
        (item) => item.id === action.payload
      );
      foundToDoList.isEditMode = !foundToDoList.isEditMode;
      return {
        ...state,
        todos: copyToDoList,
      };
    },

    [actions.EDIT_TASK]: (state, action) => {
      const { id, updatedText } = action.payload;
      const copyToDoList = [...state.todos];
      const foundToDoList = copyToDoList.find((item) => item.id === id);
      foundToDoList.text = updatedText;
      foundToDoList.isEditMode = false;
      return {
        ...state,
        todos: copyToDoList,
      };
    },

    [actions.SORT_TASKS]: (state) => {
      const copyToDoList = [...state.todos];
      const arrayNotComplete = [];
      const arrayComplete = [];
      copyToDoList.forEach((item) => {
        if (item.isComplete === false) {
          arrayNotComplete.push(item);
        } else {
          arrayComplete.push(item);
        }
      });
      const arrayOfTodo = [...arrayNotComplete, ...arrayComplete];
      return {
        ...state,
        todos: arrayOfTodo,
      };
    },

    [actions.PREVIOUS_STATE]: (state) => {
      const copyToDoList = [...state.prev];
      return {
        ...state,
        todos: copyToDoList,
      };
    },
  },
  defaultState
);

// ----------------------------------------------------------------------with TOOLKIT

export const toDolistSlice = createSlice({
  name: "toDoList",
  initialState: defaultState,
  reducers: {
    createTodo: (state, action) => {
      const newTask = {
        id: uuid(),
        text: action.payload,
        isComplete: false,
        isEditMode: false,
      };
      state.todos.unshift(newTask);
    },

    resetTodo: () => defaultState,

    deleteTodo: (state, action) => {
      const foudedTodo = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos.splice(foudedTodo, 1);
    },

    isCompleteTodo: (state, action) => {
      const foundToDoList = state.todos.find(
        (item) => item.id === action.payload
      );
      foundToDoList.isComplete = true;
    },

    toggleTodo: (state, action) => {
      const foundToDoList = state.todos.find(
        (item) => item.id === action.payload
      );
      foundToDoList.isEditMode = !foundToDoList.isEditMode;
    },

    editTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      const foundToDoList = state.todos.find((item) => item.id === id);
      foundToDoList.text = updatedText;
      foundToDoList.isEditMode = false;
    },

    sortTodo: (state) => {
      const arrayNotComplete = [];
      const arrayComplete = [];
      state.todos.forEach((item) => {
        if (item.isComplete === false) {
          arrayNotComplete.push(item);
        } else {
          arrayComplete.push(item);
        }
      });
      state.todos = [...arrayNotComplete, ...arrayComplete];
    },
  },
});

export const {
  createTodo,
  deleteTodo,
  resetTodo,
  isCompleteTodo,
  toggleTodo,
  editTodo,
  sortTodo,
} = toDolistSlice.actions;

export default toDolistSlice.reducer;
