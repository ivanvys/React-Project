import { createAction } from "redux-actions";

export const CREATE_TASK = createAction("CREATE_TASK");
export const RESET_ALL_TASKS = createAction("RESET_ALL_TASKS");
export const DELETE_TASK = createAction("DELETE_TASK");
export const EDIT_TASK = createAction("EDIT_TASK");
export const ISCOMPLETE_TASK = createAction("ISCOMPLETE_TASK");
export const TOGGLE_TASK = createAction("TOGGLE_TASK");
export const SORT_TASKS = createAction("SORT_TASKS");
export const PREVIOUS_STATE = createAction("PREVIOUS_STATE");
