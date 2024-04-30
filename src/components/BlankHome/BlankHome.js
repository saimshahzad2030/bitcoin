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
  const [username, setUsername] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setAdminAuthenticated(true);
  };
  return (
    <div className="relative flex flex-col items-center w-full container mx-auto alegreya">
      <div className="flex flex-row items-center justify-end  w-full p-4 z-10 ">
        <p className="text-indigo-700 text-xl mr-4 ">{name}</p>
        <div className="flex flex-col items-center justify-center h-12 w-12 bg-indigo-700 rounded-full cursor-pointer">
          <p
            className="text-white text-3xl font-bold"
            onClick={() => setAvatarClicked(true)}
          >
            {name.charAt(0).toUpperCase()}
          </p>
        </div>
      </div>
      <div className={`${plan ? "hidden" : ""}`}>
        <h1
          className="text-center text-5xl font-bold my-16  p-4"
          id="benefitsSection"
        >
          Benefits (working with us)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full p-4">
          <div className="bg-white h-[300px] flex flex-col items-center  w-full  cursor-pointer ">
            <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
              <h1 className="font-bold text-4xl text-white text-center">
                {BLANKPAGE[0].name}
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
              <h1 className="font-bold  text-4xl text-white text-center">
                {BLANKPAGE[1].name}
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
              <h1 className="font-bold text-4xl text-white text-center">
                {BLANKPAGE[2].name}
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
              <h1 className="font-bold text-4xl text-white text-center">
                {BLANKPAGE[3].name}
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

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full p-4 mt-16 mb-4 bg-indigo-700 h-auto">
          <div className=" mt-4 sm:mt-0  flex flex-col items-center  w-full ">
            <div className="w-11/12 h-full flex flex-col  items-center p-4  rounded-lg py-20">
              <h1 className="font-bold  text-5xl text-white text-center">
                Subscription Plans
              </h1>
              <p className=" text-indigo-200  px-4 text-center mt-4 text-lg">
                We offer subscribed(paid) plans as well as unsubscribed(free 14
                days trial) plan for our users to access the features of our
                application. The subscribed plan will provide users with more
                customization options and higher level of service
              </p>
            </div>
          </div>
          <div
            className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full cursor-pointer"
            onClick={async () => {
              // setPLan("subscribed");
              console.log("stripekey:", process.env.NEXT_PUBLIC_STRIPE_KEY);
              const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_KEY
              );
              console.log(headersFunction());
              const response = await axios.post(
                `${BASEURL}/subscribe`,
                {},
                headersFunction()
              );
              // const response = await axios.post(
              //   `http://localhost:4000/api/subscribe`,
              //   {},
              //   headersFunction()
              // );
              console.log(response.data.id);
              const result = await stripe.redirectToCheckout({
                sessionId: response.data.id,
              });
              if (result.error) {
                console.log(result.error);
              }
            }}
          >
            <div className="w-11/12 sm:w-7/12  lg:w-11/12 bg-white h-auto flex flex-col justify-start items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105 border  ">
              <h1 className="font-bold text-4xl text-indigo-700 text-center mt-4">
                {BLANKPAGE[4].name}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Access to Coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Unlimited access
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Calculational Investments
                </p>
              </div>
              <img
                className={"w-[100px] h-auto mt-4"}
                src={BLANKPAGE[4].image}
                alt={BLANKPAGE[4].name}
              />
            </div>
          </div>
          <div
            className=" h-auto] mt-4 lg:mt-0 flex flex-col items-center justify-center w-full  cursor-pointer  "
            onClick={() => setPLan("free")}
          >
            <div className="w-11/12 sm:w-7/12 lg:w-11/12 bg-white  h-auto flex flex-col justify-start items-center p-4  rounded-lg    transition-transform transform duration-700  hover:scale-105">
              <h1 className="font-bold text-4xl text-indigo-700 text-center mt-4">
                {BLANKPAGE[5].name}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  14 days trial
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Access to coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  free Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-6 h-auto"
                />
                <p className=" text-indigo-400 px-4 text-center font-bold">
                  Calculational Investments
                </p>
              </div>

              <img
                className={"w-[100px] h-auto mt-4"}
                src={BLANKPAGE[5].image}
                alt={BLANKPAGE[5].name}
              />
            </div>
          </div>
        </div>
        {/* <div
          className="flex flex-col items-start  w-full p-4 mt-20 alegreya"
          id="statusSection"
        >
          <p className={`text-black mx-4 text-4xl `}>
            Hey <span className="text-4xl font-bold">{name}</span>,
          </p>
          <p className={`text-black mx-4 text-2xl alegreya mt-2`}>
            hope you are doing well, Your account is pending approval from an
            administrator. You won&apos;t be able to access the features of our
            application until your account is approved. Please wait patiently
            for further instructions.
          </p>
        </div> */}

        {/* <div className="flex flex-col items-end  w-full p-4   mb-8">
          <p className={`text-black mx-4 text-2xl `}>
            Best Regards,{" "}
            <span className="font-bold">Team Exit Calculator</span>
          </p>
        </div> */}
      </div>
      {plan && (
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col items-start justify-center w-full ">
            <div
              className="flex flex-col items-center justify-center m-2 px-4 py-2 rounded-xl bg-indigo-700 cursor-pointer"
              onClick={() => {
                setPLan(null);
              }}
            >
              <img
                src={GoBack.image}
                alt={GoBack.name}
                className="w-12 h-auto"
              />
            </div>
          </div>

          {plan === "free" && (
            <div className="flex flex-col items-center w-full mt-12">
              <h1 className="text-5xl font-bold">Free Plan</h1>
              <p className="text-3xl px-8 mt-2 text-center">
                Are you sure? you want to acces trial version of our app with
                following terms and conditions?
              </p>

              <div className="flex flex-col w-full items-center mt-12 mb-8">
                <div className=" bg-white  w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 border border-indigo-700  h-full flex flex-col justify-start items-center p-4  rounded-lg">
                  <div className="flex flex-row items-center  mt-4 w-full px-2">
                    <img
                      src="/assets/pass/tick.svg"
                      alt="coin"
                      className="w-6 h-auto"
                    />

                    <p className="text-xl px-8 ">Access last till 14 days</p>
                  </div>
                  <div className="flex flex-row items-center  mt-2 w-full px-2">
                    <img
                      src="/assets/pass/tick.svg"
                      alt="coin"
                      className="w-6 h-auto"
                    />
                    <p className="text-xl px-8 ">
                      Require subscription after trial period
                    </p>
                  </div>
                  <div className="flex flex-row items-center  mt-2 w-full px-2">
                    <img
                      src="/assets/pass/tick.svg"
                      alt="coin"
                      className="w-6 h-auto"
                    />
                    <p className="text-xl px-8 ">Graphical View</p>
                  </div>
                  <div className="flex flex-row items-center  mt-2 w-full px-2">
                    <img
                      src="/assets/pass/tick.svg"
                      alt="coin"
                      className="w-6 h-auto"
                    />
                    <p className="text-xl px-8 ">
                      Controlled investment environment
                    </p>
                  </div>
                  <div className="flex flex-row items-center  mt-2 w-full px-2">
                    <img
                      src="/assets/pass/tick.svg"
                      alt="coin"
                      className="w-6 h-auto"
                    />
                    <p className="text-xl px-8 "> Calculational Investments</p>
                  </div>
                  <button
                    className="p-4    font-bold  bg-indigo-700 text-white rounded-xl  mt-8 transition-transform transform duration-700  hover:scale-110"
                    onClick={async () => {
                      // setPLan("subscribed");
                      console.log(
                        "stripekey:",
                        process.env.NEXT_PUBLIC_STRIPE_KEY
                      );
                      const stripe = await loadStripe(
                        process.env.NEXT_PUBLIC_STRIPE_KEY
                      );
                      // console.log(`${BASEURL}/subscribe`);
                      const response = await axios.post(
                        `${BASEURL}/subscribe`,
                        {},
                        headersFunction()
                      );
                      console.log(response.data.id);
                      const result = await stripe.redirectToCheckout({
                        sessionId: response.data.id,
                      });
                      if (result.error) {
                        console.log(result.error);
                      }
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {avatarClicked && (
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
      )}
    </div>
  );
};

export default BlankHome;
