import axios from "axios";
import { server } from "../store";

export const register =
  (firstname, lastname, email, password) => async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });

      const { data } = await axios.post(
        `${server}/register`,
        {
          firstname,
          lastname,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "registerFail", payload: error.response.data.message });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const completeprofile =
  (address, phone, state, city, pincode, gender, byear, bmonth, bday, adhaar) =>
  async (dispatch) => {
    try {
      dispatch({ type: "completeProfileRequest" });

      const { data } = await axios.post(
        `${server}/completeinfo`,
        {
          address,
          phone,
          state,
          city,
          pincode,
          gender,
          byear,
          bmonth,
          bday,
          adhaar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "completeProfileSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "completeProfileFail",
        payload: error.response.data.message,
      });
    }
  };
