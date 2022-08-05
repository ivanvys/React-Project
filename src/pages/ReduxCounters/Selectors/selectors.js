export const countersSelectors = (state) /*принимает всё хранилище целиком*/ =>
  state.counterManager.counters;

export const toDoSelectors = (state) => state.toDolist.toDoList;
