import { createSelector } from "reselect";

export const countersSelectors = (state) /*принимает всё хранилище целиком*/ =>
  state.counterManager.counters;

export const taxSelector = (state) => state.taxes.value;

export const totalRevenue = createSelector(
  countersSelectors,
  taxSelector,
  (counters, taxValue) => {
    const totalSumm = counters.reduce((summ, { countValue }) => {
      return summ + countValue;
    }, 0);
    return (totalSumm * taxValue) / 100;
  }
);
