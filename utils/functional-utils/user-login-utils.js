"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { BASEURL, headersFunction } from "../../constants/constants";

export const login = async (
  email,
  password,
  setLoading,
  setLoginSuccesfull,
  setType,
  setResponseMessage,
  callback
) => {
  setLoading(true);

  try {
    const response = await axios.post(`${BASEURL}/login`, {
      email,
      password,
    });

    if (response.status === 200) {
      setLoginSuccesfull(true);
      Cookies.set("token", response.data.token);
      Cookies.set("name", response?.data?.name);
      setResponseMessage(response.data.message);
      setType("success");

      if (callback) {
        callback(response.data.role);
      }
    } else {
      setLoginSuccesfull(false);
      setLoading(false);
      setType("failed");
      setResponseMessage(response.data.message);
    }
    console.log(response.data.message);
  } catch (error) {
    setLoginSuccesfull(false);
    setLoading(false);
    setType("failed");
    setResponseMessage(error.response.data.message);
    console.log(error);
  }
};

export const Signup = async (
  email,
  username,
  password,
  setLoading,
  setSignupSuccesfull,
  setType,
  setResponseMessage,
  callback
) => {
  setLoading(true);
  try {
    const response = await axios.post(`${BASEURL}/signup`, {
      email,
      name: username,
      password,
    });

    if (response.status === 200) {
      setSignupSuccesfull(true);
      setResponseMessage(response.data.message);
      setType("success");
      if (callback) {
        callback(response.data.role);
      }
    }
  } catch (error) {
    setLoading(false);
    setSignupSuccesfull(false);
    setResponseMessage(error.response.data.message);
    setType("failed");
  }
};

export const autoLogin = async (setLoading, callback) => {
  try {
    setLoading(true);
    const response = await axios.get(
      `${BASEURL}/authenticate`,
      headersFunction()
    );
    if (response.status === 200) {
      if (callback) {
        callback(response.data.role);
      }
    }
  } catch (error) {
    setLoading(false);
  }
};
