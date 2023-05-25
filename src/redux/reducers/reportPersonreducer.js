import { createReducer } from "@reduxjs/toolkit";

export const reportPersonReducer = createReducer(
  {},
  {
    reportPersonRequest: (state) => {
      state.loading = true;
    },
    reportPersonSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.report;
      state.message = action.payload.message;
    },
    reportPersonFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },
  }
);
