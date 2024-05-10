"use client";
import React, { useState, useEffect } from "react";
import style from "./BlankHome.module.css";
import Cookies from "js-cookie";
import {
  BASEURL,
  BLANKPAGE,
  GoBack,
  headersFunction,
} from "../../../constants/constants";
import { useRouter } from "next/navigation";
import { COUNTRY_LIST } from "../../../constants/constants";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// import("dotenv").config();

const BlankHome = () => {
  // const stripeKey = process.env.STRIPE_KEY;
  const router = useRouter();
  const name = Cookies.get("name");
  const [avatarClicked, setAvatarClicked] = useState(false);
  const [plan, setPLan] = useState(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const avatarDiv = document.getElementById("avatarDiv");
      if (avatarDiv && !avatarDiv.contains(event.target)) {
        setAvatarClicked(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [subscribed, setSubscribed] = React.useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);

  React.useEffect(() => {
    const fetchSubscribedStatus = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const subscribedParam = searchParams.get("subscribed");
      setAlertVisible(subscribedParam === "false");
    };

    fetchSubscribedStatus();
  }, []);

  const closeAlert = () => {
    setAlertVisible(false);
    setTimeout(() => {
      setAlertVisible(false);
    }, 500);
  };
  return (
    <>
      <div className="relative flex flex-col items-center w-full container mx-auto postsenOne">
        {isAlertVisible && (
          <div
            id="customAlertBox"
            className="custom-alert absolute"
            style={{
              transition: "opacity 0.5s, transform 0.5s",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <div className="flex flex-row items-center  p-4 border border-yellow-500 rounded-md">
              <p>
                {" "}
                ⚠️ You need to buy subscription to excess the exit calculator
              </p>

              <button className="text-2xl ml-4" onClick={closeAlert}>
                {"\u2716"}
              </button>
            </div>
          </div>
        )}

        <div className={`${plan ? "hidden" : ""}`}>
          <h1
            className="text-center text-4xl sm:text-5xl font-bold my-4 sm:my-16 px-2 sm:p-4"
            id="benefitsSection"
          >
            BENEFITS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full px-2 sm:p-4">
            <div className="bg-white h-[300px] flex flex-col items-center  w-full  cursor-pointer ">
              <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
                <h1 className="font-bold text-2xl text-white text-center">
                  {BLANKPAGE[0].name.toUpperCase()}
                </h1>
                <p className=" text-white px-4 text-center mt-4">
                  We provide users with coins to sell and purchase
                </p>
                <img
                  className={"w-[100px] h-auto mt-4"}
                  src={BLANKPAGE[0].image}
                  alt={BLANKPAGE[0].name}
                />
              </div>
            </div>
            <div className=" mt-4 sm:mt-0 bg-white h-[300px] flex flex-col items-center  w-full cursor-pointer ">
              <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600  h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
                <h1 className="font-bold  text-2xl text-white text-center">
                  {BLANKPAGE[1].name.toUpperCase()}
                </h1>
                <p className=" text-white px-4 text-center mt-4">
                  Chart view makes it easier to know and understand the dynamix
                  and history afa coin
                </p>
                <img
                  className={"w-[100px] h-auto mt-4"}
                  src={BLANKPAGE[1].image}
                  alt={BLANKPAGE[1].name}
                />
              </div>
            </div>
            <div className="bg-white h-[300px] mt-4 lg:mt-0 flex flex-col items-center  w-full cursor-pointer">
              <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600  h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
                <h1 className="font-bold text-2xl text-white text-center">
                  {BLANKPAGE[2].name.toUpperCase()}
                </h1>
                <p className=" text-white px-4 text-center mt-4">
                  Custom Sell levels provided for users for their exit
                </p>
                <img
                  className={"w-[100px] h-auto mt-4"}
                  src={BLANKPAGE[2].image}
                  alt={BLANKPAGE[2].name}
                />
              </div>
            </div>
            <div className="bg-white h-[300px] mt-4 lg:mt-0 flex flex-col items-center  w-full  cursor-pointer">
              <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600  h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
                <h1 className="font-bold text-2xl text-white text-center">
                  {BLANKPAGE[3].name.toUpperCase()}
                </h1>
                <p className=" text-white px-4 text-center mt-4">
                  around 30 coins provided for users for investments
                </p>
                <img
                  className={"w-[100px] h-auto mt-4"}
                  src={BLANKPAGE[3].image}
                  alt={BLANKPAGE[3].name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* {avatarClicked && (
          <div
            id="avatarDiv"
            className={`absolute right-0 w-[150px] h-[150px] pb-8 pt-4 z-5 `}
          >
            <div
              className="mt-16 flex flex-col items-center  w-full h-full rounded-lg"
              onMouseLeave={() => setAvatarClicked(false)}
            >
              <div className="w-full h-auto bg-slate-100 flex flex-col items-start pt-4  rounded-lg">
                <p
                  className="mt-1 w-full pl-4  text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                  onClick={() => {
                    const benefitsSection =
                      document.getElementById("benefitsSection");
                    benefitsSection.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Beneits
                </p>
                <p
                  className="mt-1 w-full pl-4 text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                  onClick={() => {
                    const benefitsSection =
                      document.getElementById("statusSection");
                    benefitsSection.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Status
                </p>
                <p
                  className="mt-1 mb-4 w-full pl-4 text-red-900 text-lg font-bold transition-transform transform duration-700  hover:scale-110  cursor-pointer"
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("name");
                    router.push("/");
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        )} */}
      </div>

      <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full  postsenOne bg-indigo-700">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full p-2 sm:p-4 mt-16 mb-4 bg-indigo-700 h-auto container mx-auto">
          <div className=" mt-4 sm:mt-0  flex flex-col items-center  w-full ">
            <div className="w-11/12 h-full flex flex-col  items-center sm:p-4  rounded-lg py-20">
              <h1 className="font-bold text-3xl sm:text-4xl 2xl:text-5xl text-white text-center">
                SUBSCRIPTION PLANS
              </h1>
              <p className=" text-indigo-200 px-2 sm:px-4 text-center mt-4 text-lg">
                We offer subscribed(paid) plans as well as unsubscribed(free 14
                days trial) plan for our users to access the features of our
                application. The subscribed plan will provide users with more
                customization options and higher level of service
              </p>
            </div>
          </div>
          <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full">
            <div className="w-full sm:w-7/12  lg:w-11/12 bg-white h-auto flex flex-col justify-start items-center p-4  rounded-lg">
              <h1 className="font-bold text-xl sm:text-3xl 2xl:text-4xl text-indigo-700 text-center mt-4">
                {BLANKPAGE[4].name.toUpperCase()}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  Access to Coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 sm:font-bold">
                  Unlimited access
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 sm:font-bold">
                  Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 sm:font-bold">
                  Calculational Investments
                </p>
              </div>
              <img
                className={"w-[100px] h-auto mt-4 sm:block hidden"}
                src={BLANKPAGE[4].image}
                alt={BLANKPAGE[4].name}
              />
              <button
                className="mt-4 sm:mt-0 py-3 px-4 bg-indigo-700 text-white border border-indigo-700 rounded-md hover:bg-white hover:text-indigo-700 transition-colors duration-500"
                onClick={async () => {
                  // setPLan("subscribed");
                  const stripe = await loadStripe(
                    process.env.NEXT_PUBLIC_STRIPE_KEY
                  );
                  const response = await axios.post(
                    `${BASEURL}/subscribe`,
                    {},
                    headersFunction()
                  );

                  const result = await stripe.redirectToCheckout({
                    sessionId: response.data.id,
                  });
                  if (result.error) {
                    console.log(result.error);
                  }
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full">
            <div className="w-full sm:w-7/12 lg:w-11/12 bg-white  h-auto flex flex-col justify-start items-center p-4  rounded-lg ">
              <h1 className="font-bold text-xl sm:text-3xl 2xl:text-4xl text-indigo-700 text-center mt-4">
                {BLANKPAGE[5].name.toUpperCase()}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  14 days trial
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  Access to coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  free Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4  sm:font-bold">
                  Calculational Investments
                </p>
              </div>

              <img
                className={"w-[100px] h-auto mt-4 sm:block hidden"}
                src={BLANKPAGE[5].image}
                alt={BLANKPAGE[5].name}
              />
              <button
                className="mt-4 sm:mt-0 py-3 px-4 bg-indigo-700 text-white border border-indigo-700 rounded-md hover:bg-white hover:text-indigo-700 transition-colors duration-500"
                onClick={async () => {
                  const stripe = await loadStripe(
                    process.env.NEXT_PUBLIC_STRIPE_KEY
                  );
                  // console.log(`${BASEURL}/subscribe`);
                  const response = await axios.post(
                    `${BASEURL}/subscribe`,
                    {},
                    headersFunction()
                  );

                  const result = await stripe.redirectToCheckout({
                    sessionId: response.data.id,
                  });
                  if (result.error) {
                    console.log(result.error);
                  }
                }}
              >
                START TRIAL
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[1px]"></div>
      </div>
    </>
  );
};

export default BlankHome;
