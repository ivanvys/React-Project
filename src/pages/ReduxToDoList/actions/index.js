import { createAction } from "redux-actions";

export const CREATE_TASK = createAction("CREATE_TASK");
export const RESET_ALL_TASKS = createAction("RESET_ALL_TASKS");
export const DELETE_TASK = createAction("DELETE_TASK");
export const EDIT_TASK = createAction("EDIT_TASK");
export const ISCOMPLETE_TASK = createAction("ISCOMPLETE_TASK");
