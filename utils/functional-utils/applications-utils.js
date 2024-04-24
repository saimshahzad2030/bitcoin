import axios from "axios";
import Cookies from "js-cookie";
import { BASEURL,headersFunction } from "../../constants/constants";
export const addApplication = async (setLoading, setcompanyClicked, jobId) => {
  setLoading(true);
  const data = JSON.parse(Cookies.get("data"));
  const payLoad = { jobId };

  try {
    const response = await axios.post(
      `${BASEURL}/application`,
      payLoad,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setcompanyClicked(false);
    }
  } catch (error) {
    setLoading(false);
    setcompanyClicked(false);
  }
};

export const userApplications = async (setLoading, setApplications) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${BASEURL}/application`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setApplications(response.data.data);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const cancelApplication = async (setLoading, id) => {
  setLoading(true);

  try {
    const response = await axios.delete(
      `${BASEURL}/application?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const companyApplications = async (
  page,
  setLoading,
  setApplications,
  setPages
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${BASEURL}/all-applications?page=${page}`,
      headersFunction()
    );

    setLoading(false);
    setApplications(response.data.data);
    setPages(response.data.pages);
  } catch (error) {
    console.log(error.response.data);
    setLoading(false);
  }
};

export const updateUserApplication = async (setLoading, id, status) => {
  const payLoad = { id, status };
  setLoading(true);
  try {
    const response = await axios.patch(
      `${BASEURL}/application`,
      payLoad,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      console.log("200");
    }
  } catch (error) {
    setLoading(false);
  }
};
