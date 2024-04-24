import axios from "axios";
import Cookies from "js-cookie";
import { BASEURL,headersFunction } from "../../constants/constants";

export const companyJobs = async (page, setLoading, setJobs, setPages) => {
  setLoading(true);

  try {
    const response = await axios.get(
      `${BASEURL}/company-jobs?page=${page}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setJobs(response.data.data);
      setPages(response.data.pages);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const updateJob = async (
  setLoading,
  id,
  companymessage,
  position,
  experience,
  location,
  availability
) => {
  setLoading(true);
  const dataPayload = {
    id,
    companymessage,
    position,
    experience,
    location,
    availability,
  };
  try {
    console.log("id from axios:", id);
    const response = await axios.patch(
      `${BASEURL}/company-jobs`,
      dataPayload,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const addJob = async (
  setLoading,
  companymessage,
  position,
  experience,
  location,
  availability
) => {
  setLoading(true);
  const dataPayload = {
    companymessage,
    position,
    experience,
    location,
    availability,
  };
  try {
    const response = await axios.post(
      `${BASEURL}/company-jobs`,
      dataPayload,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const deleteJob = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${BASEURL}/company-jobs?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allJobsPosted = async (setLoading, setCompanies) => {
  setLoading(true);

  try {
    const response = await axios.get(`${BASEURL}/all-jobs`, headersFunction());

    if (response.status === 200) {
      setLoading(false);
      setCompanies(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};
