"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import LandingSection from "@/components/LandingSection/LandingSection";
import CoinsSection from "@/components/CoinsSection/CoinsSection";
import SupportedCoins from "@/components/SuppportedCoins/SupportedCoins";
import InvestmentPlan from "@/components/InvestmentPlan/InvestmentPlan";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import CurrencyConverter from "@/components/CurrencyConverter/CurrencyConverter";
import Roadmap from "@/components/Roadmap/Roadmap";
import { useRouter } from "next/navigation";
import { BASEURL, BLANKPAGE, headersFunction } from "../../constants/constants";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Cookies from "js-cookie";
const Page = () => {
  const token = Cookies.get("token");
  const router = useRouter();
  return (
    <>
      <Navbar bg={"bg-indigo-700"} />
      <div className="container mx-auto  ">
        <div className="relative flex-col items-center">
          <LandingSection />
        </div>
      </div>
      <div className="h-[100vh] w-full bg-indigo-700"></div>
      <div className="container mx-auto  ">
        <CoinsSection />
      </div>
      <SupportedCoins />
      <div className="container mx-auto">
        <InvestmentPlan />
      </div>
      <Services />
      <CurrencyConverter />
      <Roadmap />
      <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full  postsenOne bg-white">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full p-2 sm:p-4 mt-4 sm:mt-16 mb-4 bg-white h-auto container mx-auto">
          <div className=" mt-4 sm:mt-0  flex flex-col items-center  w-full ">
            <div className="w-11/12 h-full flex flex-col  items-center sm:p-4  rounded-lg py-20">
              <h1 className="font-bold text-3xl sm:text-4xl 2xl:text-5xl text-indigo-700 text-center">
                SUBSCRIPTION PLANS
              </h1>
              <p className=" text-indigo-500 px-2 sm:px-4 text-center mt-4 text-lg">
                We offer subscribed(paid) plans as well as unsubscribed(free 14
                days trial) plan for our users to access the features of our
                application. The subscribed plan will provide users with more
                customization options and higher level of service
              </p>
            </div>
          </div>
          <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full">
            <div className="w-full sm:w-7/12  lg:w-11/12 bg-indigo-700 h-full flex flex-col justify-end items-center p-4  rounded-lg">
              <h1 className="font-bold text-xl sm:text-3xl 2xl:text-4xl text-white text-center mt-4">
                {BLANKPAGE[4].name.toUpperCase()}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className="  text-indigo-200   px-4  sm:font-bold">
                  Access to Coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className="  text-indigo-200  px-4  sm:font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className="  text-indigo-200  px-4 sm:font-bold">
                  Unlimited access
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className="  text-indigo-200  px-4 sm:font-bold">
                  Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4 sm:font-bold">
                  Calculational Investments
                </p>
              </div>
              <img
                className={"w-[100px] h-auto mt-4 sm:block hidden"}
                src={BLANKPAGE[6].image}
                alt={BLANKPAGE[6].name}
              />
              <button
                className="mt-4 sm:mt-0 py-3 px-4 bg-white text-indigo-700 border border-white rounded-md hover:bg-indigo-700 hover:text-white transition-colors duration-500"
                onClick={
                  token
                    ? async () => {
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
                      }
                    : () => {
                        router.push("/login");
                      }
                }
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className=" h-auto mt-4 lg:mt-0 flex flex-col items-center justify-center w-full">
            <div className="w-full sm:w-7/12 lg:w-11/12 bg-indigo-700  h-full flex flex-col justify-end items-center p-4  rounded-lg ">
              <h1 className="font-bold text-xl sm:text-3xl 2xl:text-4xl text-white text-center mt-4">
                {BLANKPAGE[5].name.toUpperCase()}
              </h1>
              <div className="flex flex-row items-center  mt-4 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4  sm:font-bold">
                  14 days trial
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4  sm:font-bold">
                  Customization
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4  sm:font-bold">
                  Access to coin history
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4  sm:font-bold">
                  free Graphical view
                </p>
              </div>
              <div className="flex flex-row items-center  mt-2 w-full px-2">
                <img
                  src="/assets/pass/tick.svg"
                  alt="coin"
                  className="w-4 sm:w-6 h-auto"
                />
                <p className=" text-indigo-200 px-4  sm:font-bold">
                  Calculational Investments
                </p>
              </div>

              <img
                className={"w-[100px] h-auto mt-4 sm:block hidden"}
                src={BLANKPAGE[7].image}
                alt={BLANKPAGE[7].name}
              />
              <button
                className="mt-4 sm:mt-0 py-3 px-4 bg-white text-indigo-700 border border-white rounded-md hover:bg-indigo-700 hover:text-white transition-colors duration-500"
                onClick={
                  token
                    ? async () => {
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
                      }
                    : () => {
                        router.push("/login");
                      }
                }
              >
                START TRIAL
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[1px]"></div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Page;
