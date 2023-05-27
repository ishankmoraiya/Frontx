import { configureStore } from "@reduxjs/toolkit";
import { completeProfileReducer, userReducer } from "./reducers/userReducer";
import {
  addMoreImageReducer,
  getAllReportReducer,
  getReportByIdReducer,
  reportPersonReducer,
} from "./reducers/reportPersonreducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    completeInformation: completeProfileReducer,
    reportPerson: reportPersonReducer,
    allReport: getAllReportReducer,
    singlereport: getReportByIdReducer,
    addimage: addMoreImageReducer,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
