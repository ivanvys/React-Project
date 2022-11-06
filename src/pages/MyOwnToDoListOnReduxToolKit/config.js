export const SORT_OPTIONS = {
  ASC: "ASC",
  DESK: "DESK",
  DEFAULT: "DEFAULT",
  COMPLETE: "COMPLETE",
  NOT_COMPLETE: "NOT_COMPLETE",
};

export const SORT_SCENARIOS = {
  [SORT_OPTIONS.ASC]: (current, next) => current.text.localeCompare(next.text),
  [SORT_OPTIONS.DESK]: (current, next) => next.text.localeCompare(current.text),
  [SORT_OPTIONS.DEFAULT]: null,
  [SORT_OPTIONS.COMPLETE]: "COMPLETE",
  [SORT_OPTIONS.NOT_COMPLETE]: "NOT_COMPLETE",
};
