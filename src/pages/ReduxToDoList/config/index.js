export const SORT_OPTIONS = {
  ASC: "ASC",
  DESC: "DESC",
  DEFAULT: "DEFAULT",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};

export const SORT_SCENARIOS = {
  [SORT_OPTIONS.ASC]: (current, next) => current.text.localeCompare(next.text),
  [SORT_OPTIONS.DESC]: (current, next) => next.text.localeCompare(current.text),
  [SORT_OPTIONS.DEFAULT]: null,
  [SORT_OPTIONS.NOT_COMPLETED]: "NOT_COMPLETED",
  [SORT_OPTIONS.COMPLETED]: "COMPLETED",
};
