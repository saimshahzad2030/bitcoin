import axios from "axios";
import { BASEURL,headersFunction } from "../../constants/constants";

export const hiredStudents = async (
  page,
  setLoading,
  setStudents,
  setPages
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${BASEURL}/hiring?page=${page}`,
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

export const rejectHiring = async (setLoading, id) => {
  setLoading(true);
  try {
    const response = await axios.delete(
      `${BASEURL}/hiring?id=${id}`,
      headersFunction()
    );

    if (response.status === 200) {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
