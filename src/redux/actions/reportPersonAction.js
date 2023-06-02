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

export const addMoreImage = (id, FormData) => async (dispatch) => {
  try {
    dispatch({ type: "addMoreImageRequest" });

    const { data } = await axios.post(
      `${server}/addmoreimage/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "addMoreImageSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addMoreImageFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllReport = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllReportRequest" });

    const { data } = await axios.get(`${server}/allreports`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllReportSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllReportFail",
      payload: error.response.data.message,
    });
  }
};

export const getReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getReportByIdRequest" });

    const { data } = await axios.get(`${server}/singlereport/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "getReportByIdSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getReportByIdFail",
      payload: error.response.data.message,
    });
  }
};
