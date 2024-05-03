"use client";
import axios from "axios";
import { BASEURL, headersFunction } from "../../constants/constants";

export const fetchCoins = async (setLoading, setCoinsdata) => {
  setLoading(true);
  try {
    console.log(headersFunction());
    const response = await axios.get(
      `${BASEURL}/fetchdata`,

      headersFunction()
    );

    if (response.status === 200) {
      console.log(response.data);
      setCoinsdata(response.data.coins);
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);

    console.log(error);
  }
};
export const fetchSingleCoinDetails = async (setSelectedCoin, coinname) => {
  try {
    console.log(headersFunction());
    const response = await axios.get(
      `${BASEURL}/fetchSingleCoin?coin=${coinname}`,
      headersFunction()
    );

    if (response.status === 200) {
      console.log(response.data.coinDetails);
      setSelectedCoin(response.data.coinDetails);
    }
  } catch (error) {
    console.log(error);
  }
};
