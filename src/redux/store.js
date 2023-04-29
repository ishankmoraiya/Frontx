import { configureStore } from "@reduxjs/toolkit";
import { completeProfileReducer, userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    completeInformation: completeProfileReducer,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
