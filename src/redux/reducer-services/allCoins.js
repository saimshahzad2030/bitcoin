import { coins } from "../../../constants/constants";
export const fetchAllCoins = async ({ rejectWithValue }) => {
  try {
    return coins;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

// export const addApplication = async (jobId, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(
//       `${BASEURL}/application`,
//       {
//         jobId,
//       },
//       headersFunction()
//     );
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// };

// export const cancelApplication = async (id, { rejectWithValue }) => {
//   console.log("Application Id: ", id);
//   try {
//     const response = await axios.delete(
//       `${BASEURL}/application?id=${id}`,
//       headersFunction()
//     );

//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// };
