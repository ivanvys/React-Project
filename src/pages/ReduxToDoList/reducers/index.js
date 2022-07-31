import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { v4 as uuid } from "uuid";

const defaultState = {
  toDoList: [],
};

export const CreateToDoList = handleActions(
  {
    [actions.CREATE_TASK]: (state) => {
      const copyToDoList = [...state.toDoList];
      const newTask = {
        id: uuid(),
        text: "",
      };
      copyToDoList.push(newTask);
      return {
        ...state,
        toDoList: copyToDoList,
      };
    },
    [actions.RESET_ALL_TASKS]: () => {
      return defaultState;
    },
    [actions.DELETE_TASK]: (state, action) => {
      const copyToDoList = [...state.toDoList];
      const foundToDoList = copyToDoList.findIndex(
        (item) => item.id === action.payload
      );
      copyToDoList.splice(foundToDoList, 1);
      return {
        ...state,
        toDoList: copyToDoList,
      };
    },

    [actions.ISCOMPLETE_TASK]: (state, action) => {
      const copyToDoList = [...state.toDoList];
      const foundToDoList = copyToDoList.find(
        (item) => item.id === action.payload
      );
      foundToDoList.text = "111";
      return {
        ...state,
        toDoList: copyToDoList,
      };
    },

    [actions.EDIT_TASK]: (state, action) => {
      const copyToDoList = [...state.toDoList];
      const foundToDoList = copyToDoList.find(
        (item) => item.id === action.payload
      );
      foundToDoList.text = <input></input>;
      return {
        ...state,
        toDoList: copyToDoList,
      };
    },
  },
  defaultState
);
