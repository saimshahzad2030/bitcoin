"use client";
import React, { useState } from "react";
import style from "./BlankHome.module.css";
import Cookies from "js-cookie";
import { BLANKPAGE } from "../../../constants/constants";
import { useRouter } from "next/navigation";
const BlankHome = () => {
  const router = useRouter();
  const name = Cookies.get("name");
  const [avatarClicked, setAvatarClicked] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-full container mx-auto ">
      <div className="flex flex-row items-center justify-end  w-full p-4 z-10 ">
        <p className="text-indigo-700 text-2xl mr-4">{name}</p>
        <div className="flex flex-col items-center justify-center h-12 w-12 bg-indigo-700 rounded-full cursor-pointer">
          <p
            className="text-white text-3xl font-bold"
            onClick={() => setAvatarClicked(true)}
          >
            {name.charAt(0).toUpperCase()}
          </p>
        </div>
      </div>
      <h1 className="text-center text-5xl font-bold my-16">
        Benefits (working with us)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full p-4">
        <div className="bg-white h-[300px] flex flex-col items-center  w-full  cursor-pointer ">
          <div className="w-11/12 bg-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
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
        <div className="bg-white h-[300px] flex flex-col items-center  w-full cursor-pointer ">
          <div className="w-11/12 bg-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
            <h1 className="font-bold  text-4xl text-white text-center">
              {BLANKPAGE[1].name}
            </h1>
            <p className=" text-white px-4 text-center mt-4">
              Chart view makes it easier to know and understand the dynamix and
              history afa coin
            </p>
            <img
              className={"w-[100px] h-auto mt-4"}
              src={BLANKPAGE[1].image}
              alt={BLANKPAGE[1].name}
            />
          </div>
        </div>
        <div className="bg-white h-[300px] mt-4 lg:mt-0 flex flex-col items-center  w-full cursor-pointer">
          <div className="w-11/12 bg-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
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
          <div className="w-11/12 bg-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
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

      <div className="flex flex-col items-start  w-full p-4 mt-20">
        <p className={`text-black mx-4 text-4xl ${style.text}`}>
          Hey <span className="text-4xl font-bold">{name}</span>,
        </p>
        <p className={`text-black mx-4 text-2xl ${style.text}`}>
          hope you are doing well, Your account is pending approval from an
          administrator. You won&apos;t be able to access the features of our
          application until your account is approved. Please wait patiently for
          further instructions.
        </p>
      </div>
      <div className="flex flex-col items-end  w-full p-4   mb-8">
        <p className={`text-black mx-4 text-2xl ${style.text}`}>
          Best Regards, <span className="font-bold">Team Exit Calculator</span>
        </p>
      </div>
      {avatarClicked && (
        <div className="absolute right-[-40px] w-[150px] h-[200px] pb-8 pt-4 z-5">
          <div
            className="mt-16 flex flex-col items-center bg-red-100 w-full h-full rounded-lg"
            onMouseLeave={() => setAvatarClicked(false)}
          >
            <div className="w-full h-full bg-slate-200 flex flex-col items-center pt-4  rounded-lg">
              <button
                className="bg-red-600 font-bold text-white p-4 rounded-lg"
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("name");
                  router.push("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlankHome;
