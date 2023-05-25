import { configureStore } from "@reduxjs/toolkit";
import { completeProfileReducer, userReducer } from "./reducers/userReducer";
import { reportPersonReducer } from "./reducers/reportPersonreducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    completeInformation: completeProfileReducer,
    reportPerson: reportPersonReducer,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
