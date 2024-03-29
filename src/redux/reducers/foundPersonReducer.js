import { createReducer } from "@reduxjs/toolkit";

export const foundPersonReducer = createReducer(
  {},
  {
    foundPersonRequest: (state) => {
      state.loading = true;
    },
    foundPersonSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    foundPersonFail: (state, action) => {
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

export const getAllFoundReportReducer = createReducer(
  {},
  {
    getAllFoundReportRequest: (state) => {
      state.loading = true;
    },
    getAllFoundReportSuccess: (state, action) => {
      state.loading = false;
      state.reports = action.payload.reports;
    },
    getAllFoundReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const getFoundReportByIdReducer = createReducer(
  {},
  {
    getFoundReportByIdRequest: (state) => {
      state.loading = true;
    },
    getFoundReportByIdSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.report;
    },
    getFoundReportByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const addMoreFoundImageReducer = createReducer(
  {},
  {
    addMoreFoundImageRequest: (state) => {
      state.loading = true;
    },
    addMoreFoundImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addMoreFoundImageFail: (state, action) => {
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
