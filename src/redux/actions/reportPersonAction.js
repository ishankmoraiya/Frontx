import axios from "axios";
import { server } from "../store";

export const reportPerson = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "reportPersonRequest" });

    const { data } = await axios.post(`${server}/report`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "reportPersonSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "reportPersonFail",
      payload: error.response.data.message,
    });
  }
};
