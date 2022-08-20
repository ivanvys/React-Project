import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  counters: [],
};

// ---------------------without TOOLKIT

export const counterOfCounter = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const copyCounters = [...state.counters];
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };

      const arrayCounters = copyCounters.map((item) => {
        return {
          ...item,
          countValue:
            item.countValue % 2 === 0 ? item.countValue + 1 : item.countValue,
        };
      });
      arrayCounters.push(newCounter);

      return {
        ...state,
        counters: arrayCounters,
      };
    },

    [actions.RESET_COUNTERS]: () => {
      return defaultState;
    },

    [actions.PLUS_COUNTER]: (state, action) => {
      const copyCounters = [...state.counters];
      const foundCounter = copyCounters.find(
        (item) => item.id === action.payload
      );
      foundCounter.countValue += 1;
      return { ...state, counters: copyCounters };
    },

    [actions.MINUS_COUNTER]: (state, action) => {
      const copyCounters = [...state.counters];
      const foundCounter = copyCounters.find(
        (item) => item.id === action.payload
      );
      if (foundCounter.countValue) {
        foundCounter.countValue -= 1;
      }
      return { ...state, counters: copyCounters };
    },

    [actions.RESET_COUNTER]: (state, action) => {
      const copyCounters = [...state.counters];
      const foundCounter = copyCounters.find(
        (item) => item.id === action.payload
      );
      foundCounter.countValue = 0;
      return { ...state, counters: copyCounters };
    },

    [actions.REMOVE_COUNTER]: (state, action) => {
      const copyCounters = [...state.counters];
      const foundCounter = copyCounters.findIndex(
        (item) => item.id === action.payload
      );
      copyCounters.splice(foundCounter, 1);
      return {
        ...state,
        counters: copyCounters.map((item) => {
          return {
            ...item,
            countValue:
              item.countValue % 2 !== 0 ? item.countValue - 1 : item.countValue,
          };
        }),
      };
    },
  },
  defaultState
);

// ---------------------with TOOLKIT

export const counterManagerReduxToolKit = createSlice({
  name: "counterManagerReduxToolKit",
  initialState: defaultState,
  reducers: {
    createCounter: (state) => {
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };

      const arrayCounters = state.counters.map((item) => {
        return {
          ...item,
          countValue:
            item.countValue % 2 === 0 ? item.countValue + 1 : item.countValue,
        };
      });
      arrayCounters.push(newCounter);

      state.counters = arrayCounters;
    },
    resetCounter: () => {
      return defaultState;
    },
    counterPlus: (state, action) => {
      const foundCounter = state.counters.find(
        (item) => item.id === action.payload
      );
      foundCounter.countValue += 1;
    },
    counterMinus: (state, action) => {
      const foundCounter = state.counters.find(
        (item) => item.id === action.payload
      );
      if (foundCounter.countValue) {
        foundCounter.countValue -= 1;
      }
    },
    counterReset: (state, action) => {
      const foundCounter = state.counters.find(
        (item) => item.id === action.payload
      );
      foundCounter.countValue = 0;
    },
    removeCounter: (state, action) => {
      const foundCounter = state.counters.findIndex(
        (item) => item.id === action.payload
      );
      state.counters.splice(foundCounter, 1);
      const arrayCounters = state.counters.map((item) => {
        return {
          ...item,
          countValue:
            item.countValue % 2 !== 0 ? item.countValue - 1 : item.countValue,
        };
      });
      state.counters = arrayCounters;
    },
  },
});

export const {
  createCounter,
  resetCounter,
  counterPlus,
  counterMinus,
  counterReset,
  removeCounter,
} = counterManagerReduxToolKit.actions;

export default counterManagerReduxToolKit.reducer;
