import { createReducer } from "@reduxjs/toolkit";

export const reportPersonReducer = createReducer(
  {},
  {
    reportPersonRequest: (state) => {
      state.loading = true;
    },
    reportPersonSuccess: (state, action) => {
      state.loading = false;
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

export const getAllReportReducer = createReducer(
  {},
  {
    getAllReportRequest: (state) => {
      state.loading = true;
    },
    getAllReportSuccess: (state, action) => {
      state.loading = false;
      state.reports = action.payload.reports;
    },
    getAllReportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const getReportByIdReducer = createReducer(
  {},
  {
    getReportByIdRequest: (state) => {
      state.loading = true;
    },
    getReportByIdSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.report;
    },
    getReportByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const addMoreImageReducer = createReducer(
  {},
  {
    addMoreImageRequest: (state) => {
      state.loading = true;
    },
    addMoreImageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addMoreImageFail: (state, action) => {
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
