"use client";
import axios from "axios";
import { BASEURL, headersFunction } from "../../constants/constants";

export const sendVerificationEmail = async (
  email,
  setLoading,
  setEmailEntered,
  setType,
  setResponseMessage
) => {
  setLoading(true);

  try {
    const response = await axios.post(`${BASEURL}/verificationemail`, {
      email: email,
    });

    if (response.status === 200) {
      setLoading(false);
      setEmailEntered(true);
      setType("success");
      setResponseMessage(response.data.message);
    }
  } catch (error) {
    setLoading(false);
    setType("failed");
    setResponseMessage(error.response.data.message);
  }
};

export const passwordVerificationEmail = async (
  email,
  setLoading,
  setEmailEntered,
  setType,
  setResponseMessage
) => {
  setLoading(true);

  try {
    const response = await axios.post(`${BASEURL}/PassVerificationController`, {
      email: email,
    });

    if (response.status === 200) {
      setLoading(false);
      setEmailEntered(true);
      setType("success");
      setResponseMessage(response.data.message);
    }
  } catch (error) {
    setLoading(false);
    setType("failed");
    setResponseMessage(error.response.data.message);
  }
};
