import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { v4 as uuid } from "uuid";

const defaultState = {
  todos: [],
};

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
        ...state,
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
  },
  defaultState
);
