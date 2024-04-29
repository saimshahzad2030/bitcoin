"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import style from "./AdminDashboard.module.css";
import Progressbar from "../Progressbar/Progressbar";
import { TOPSELLINGCOINS } from "../../../constants/constants";
import DoughNutChart from "../Doughnut/Doughnut";
import Link from "next/link";
import { useRouter } from "next/navigation";
const AdminDashboard = ({ toggleSidebar }) => {
  const router = useRouter();
  const name = Cookies.get("name");
  const [avatarClicked, setAvatarClicked] = useState(false);
  return (
    <div className={`${style.admin} w-full checkTest`}>
      <div className="w-full bg-white flex flex-row items-center justify-between relative shadow-lg  px-4">
        <img
          onClick={toggleSidebar}
          src={`/assets/admin/show-sidebar.svg`}
          alt="menu-icon"
          className=" w-8 h-auto  md:hidden
            cursor-pointer"
        />
        <h1 className="text-3xl font-bold">DASHBOARD</h1>
        <div className="flex flex-row items-center justify-end  w-full z-10 py-2">
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
                <Link
                  href={"/admin/details"}
                  className="mt-1 w-full pl-4  text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                >
                  Account
                </Link>
                <p
                  className="mt-1 w-full pl-4 text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                  onClick={() => {
                    const benefitsSection =
                      document.getElementById("statusSection");
                    benefitsSection.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Settings
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
      <div>
        <DoughNutChart />
        <h1 className="text-center text-5xl font-bold mt-8">
          Top selling coins
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-full p-4">
          <div className="bg-white h-[300px] flex flex-col items-center  w-full  cursor-pointer ">
            <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600 h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
              <h1 className="font-bold text-4xl text-white text-center">
                {TOPSELLINGCOINS[0].name}
              </h1>
              <p className=" text-white px-4 text-center mt-4">
                We provide users with coins to sell and purchase
              </p>
              <img
                className={"w-[100px] h-auto mt-4"}
                src={TOPSELLINGCOINS[0].image}
                alt={TOPSELLINGCOINS[0].name}
              />
            </div>
          </div>
          <div className=" mt-4 sm:mt-0 bg-white h-[300px] flex flex-col items-center  w-full cursor-pointer ">
            <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600  h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
              <h1 className="font-bold  text-4xl text-white text-center">
                {TOPSELLINGCOINS[1].name}
              </h1>
              <p className=" text-white px-4 text-center mt-4">
                Chart view makes it easier to know and understand the dynamix
                and history afa coin
              </p>
              <img
                className={"w-[100px] h-auto mt-4"}
                src={TOPSELLINGCOINS[1].image}
                alt={TOPSELLINGCOINS[1].name}
              />
            </div>
          </div>
          <div className="bg-white h-[300px] mt-4 md:mt-0 flex flex-col items-center  w-full cursor-pointer">
            <div className="w-11/12 bg-gradient-to-b from-indigo-900 to-indigo-600  h-full flex flex-col justify-center items-center p-4  rounded-lg  transition-transform transform duration-700  hover:scale-105">
              <h1 className="font-bold text-4xl text-white text-center">
                {TOPSELLINGCOINS[2].name}
              </h1>
              <p className=" text-white px-4 text-center mt-4">
                Custom Sell levels provided for users for their exit
              </p>
              <img
                className={"w-[100px] h-auto mt-4"}
                src={TOPSELLINGCOINS[2].image}
                alt={TOPSELLINGCOINS[2].name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
