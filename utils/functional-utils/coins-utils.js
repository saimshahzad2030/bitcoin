"use client";
import axios from "axios";
import { BASEURL, headersFunction } from "../../constants/constants";

export const fetchCoins = async (setLoading, setCoinsdata) => {
  setLoading(true);
  try {
    const response = await axios.get(`${BASEURL}/fetchAllCoins`);

    if (response.status === 200) {
      console.log(response.data.filteredCoins);
      setCoinsdata(response.data.filteredCoins);
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);

    console.log(error);
  }
};

export const fetchSingleCoinDetails = async (setSelectedCoin, coinname) => {
  try {
    const response = await axios.get(
      `${BASEURL}/fetchSingleCoin?coin=${coinname}`,
      headersFunction()
    );

    if (response.status === 200) {
      setSelectedCoin(response.data.coinDetails);
      // console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchSingleCoinHistory = async (
  setSelectedCoin,
  setHistory,
  setLoading,
  uuid,
  coin
) => {
  try {
    setLoading(true);
    console.log("sda", uuid);
    const response = await axios.get(
      `${BASEURL}/fetchSingleCoin?uuid=${uuid}&coin=${coin}`,
      headersFunction()
    );

    if (response.status === 200) {
      setHistory(response.data.prices);
      console.log("response.data.coinDetails", response.data.coinDetails);
      setSelectedCoin(response.data.coinDetails);
    }
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
