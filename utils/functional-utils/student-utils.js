import axios from "axios";
import Cookies from "js-cookie";
import { BASEURL,headersFunction } from "../../constants/constants";

export const studentDetails = async (setLoading, setFormSubmitted, setData) => {
  setLoading(true);
  try {
    const response = await axios.get(`${BASEURL}/student`, headersFunction());

    if (response.status === 200) {
      setLoading(false);
      setData(response.data.data);

      setFormSubmitted(true);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const studentDetails2 = async (setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(`${BASEURL}/student`, headersFunction());

    if (response.status === 200) {
      setLoading(false);
      Cookies.set("data", JSON.stringify(response.data.data));
    }
  } catch (error) {
    setLoading(false);
  }
};

export const addStudentDetails = async (
  setLoading,
  setFormSubmitted,
  firstname,
  lastname,
  studentId,
  age,
  faculty,
  obtainedmarks,
  position,
  availability,
  experience
) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${BASEURL}/student`,
      {
        firstname,
        lastname,
        studentId,
        age,
        faculty,
        obtainedmarks,
        position,
        availability,
        experience,
      },
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setFormSubmitted(true);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const updateStudentDetails = async (
  setLoading,
  setFormSubmitted,
  firstname,
  lastname,
  studentId,
  age,
  faculty,
  obtainedmarks,
  position,
  availability,
  experience
) => {
  setLoading(true);
  try {
    const response = await axios.patch(
      `${BASEURL}/student`,
      {
        firstname,
        lastname,
        studentId,
        age,
        faculty,
        obtainedmarks,
        position,
        availability,
        experience,
      },
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setFormSubmitted(true);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const allStudents = async (page, setLoading, setStudents, setPages) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${BASEURL}/unemployed-students?page=${page}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
      setStudents(response.data.data);
      setPages(response.data.pages);
    }
  } catch (error) {
    setLoading(false);
  }
};

export const hireStudent = async (setLoading, email, studentId, position) => {
  const payLoad = { email, studentId, position };
  setLoading(true);
  try {
    const response = await axios.post(
      `${BASEURL}/hiring`,
      payLoad,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
