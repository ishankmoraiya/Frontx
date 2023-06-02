import axios from "axios";
import { server } from "../store";

export const foundPerson = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "foundPersonRequest" });

    const { data } = await axios.post(`${server}/foundreport`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "foundPersonSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "foundPersonFail",
      payload: error.response.data.message,
    });
  }
};

export const addMoreFoundImage = (id, FormData) => async (dispatch) => {
  try {
    dispatch({ type: "addMoreFoundImageRequest" });

    const { data } = await axios.post(
      `${server}/addmorefoundimage/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "addMoreFoundImageSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addMoreFoundImageFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllFoundReport = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllFoundReportRequest" });

    const { data } = await axios.get(`${server}/allfoundreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllFoundReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllFoundReportFail",
      payload: error.response.data.message,
    });
  }
};

export const getFoundReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getFoundReportByIdRequest" });

    const { data } = await axios.get(`${server}/singlefoundreport/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getFoundReportByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getFoundReportByIdFail",
      payload: error.response.data.message,
    });
  }
};
