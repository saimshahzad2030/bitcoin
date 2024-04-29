"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./AdminSideBar.module.css";
const AdminSidebar = ({ isOpen, toggleSidebar, selectedLink }) => {
  console.log(selectedLink, "selected link");
  return (
    <div
      className={`z-40 absolute md:relative flex flex-col items-center w-3/12 md:w-3/12  lg:w-2/12 h-[100vh]  sidebar  ${
        isOpen ? "open" : ""
      } ${style.admin}`}
    >
      <div
        className={`  
          absolute top-4 ${isOpen ? "" : "right-[2%]"} 
         cursor-pointer bg-white  p-2 rounded-3xl`}
        onClick={toggleSidebar}
      >
        <img
          src={`${
            !isOpen
              ? "/assets/admin/hide-sidebar.svg"
              : "/assets/admin/show-sidebar.svg"
          }`}
          alt="menu-icon"
          className=" w-6 h-auto"
        />
      </div>
      <div
        className={`flex flex-col items-center justify-between w-full h-full bg-indigo-700 `}
      >
        <div className="flex flex-col items-center justify-center mt-16 w-full ">
          <h1
            className={`text-white text-lg md:text-2xl font-bold ${
              isOpen ? "hidden" : ""
            }`}
          >
            Exit Calculator
          </h1>
          <div
            className={`flex flex-col ${
              isOpen ? "items-center" : "items-end"
            } mt-32 w-full relative `}
          >
            <div
              className={`flex flex-col items-center w-11/12 md:w-10/12 ${
                isOpen || selectedLink === "" ? "" : "bg-white"
              } rounded-3xl`}
            >
              <Link
                href={"/admin/home"}
                className={`text-indigo-700 bg-indigo-700 w-full py-4 px-4   z-10 ${
                  selectedLink === "dashboard" ? "rounded-3xl  " : " "
                }
                ${isOpen ? "hidden" : ""}`}
              ></Link>
              <Link
                href={"/admin/home"}
                className={` w-full  py-2 px-4  z-10 ${
                  selectedLink === "dashboard"
                    ? "text-indigo bg-white rounded-3xl"
                    : "text-white bg-indigo-700 rounded-b-3xl"
                } ${isOpen ? "hidden" : ""}`}
              >
                <div
                  className={`flex flex-row items-center ${
                    isOpen ? "hidden" : ""
                  }`}
                >
                  <img
                    src={`${
                      selectedLink === "dashboard"
                        ? "/assets/admin/dashboard-purple.svg"
                        : "/assets/admin/dashboard.svg"
                    }`}
                    alt="dashboard-icon"
                    className="w-6  h-auto"
                  />
                  <span className="mx-8">Dashboard</span>
                </div>
              </Link>

              <Link
                href={"/admin/users"}
                className={` w-full  py-2 px-4  z-10 ${
                  selectedLink === "users"
                    ? "text-indigo bg-white rounded-3xl"
                    : "text-white bg-indigo-700 rounded-t-3xl"
                } ${isOpen ? "hidden" : ""}`}
              >
                <div className="flex flex-row items-center">
                  <img
                    src={`${
                      selectedLink === "users"
                        ? "/assets/admin/users-purple.svg"
                        : "/assets/admin/users.svg"
                    }`}
                    alt="dashboard-icon"
                    className="w-6  h-auto"
                  />
                  <span className="mx-8">Users</span>
                </div>
              </Link>

              <Link
                href={"/admin/users"}
                className={`text-indigo-700 bg-indigo-700 w-full   py-4 px-4   z-10 ${
                  selectedLink === "users" ? "rounded-3xl" : ""
                } ${isOpen ? "hidden" : ""}`}
              ></Link>
              <div
                className={`w-3/12 h-full bg-indigo-700 absolute z-4 left-0 ${
                  isOpen ? "hidden" : ""
                }`}
              ></div>
              <Link
                href={"/admin/home"}
                className={`${
                  selectedLink === "dashboard"
                    ? "bg-white"
                    : "bg-white sm:bg-indigo-700"
                } ${
                  isOpen ? "" : "hidden"
                }  p-2 mb-4 rounded-3xl mr-[2px] cursor-pointer`}
              >
                <img
                  src={`${
                    selectedLink === "dashboard"
                      ? "/assets/admin/dashboard-purple.svg"
                      : "/assets/admin/dashboard.svg"
                  }`}
                  alt="dashboard-icon"
                  className="w-6  h-auto"
                />
              </Link>
              <Link
                href={"/admin/users"}
                className={`p-2 rounded-3xl mr-[2px] cursor-pointer  ${
                  selectedLink === "users"
                    ? "bg-white"
                    : "bg-white sm:bg-indigo-700"
                } ${isOpen ? "" : "hidden"} `}
              >
                <img
                  src={`${
                    selectedLink === "users"
                      ? "/assets/admin/users-purple.svg"
                      : "/assets/admin/users.svg"
                  }`}
                  alt="dashboard-icon"
                  className="w-6  h-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center mb-8 ${
            isOpen ? "hidden" : ""
          }`}
        >
          <Link href={"/admin/home"} className="text-xs text-white underline">
            Facebook
          </Link>
          <Link href={"/admin/home"} className="text-xs text-white underline">
            Twitter
          </Link>
          <Link href={"/admin/home"} className="text-xs text-white underline">
            Google
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
