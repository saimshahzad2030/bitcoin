"use client";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import style from "./AdminUi.module.css";
import Table from "../Table/Table";
import AdminTable from "../AdminTable/AdminTable";
const AdminUi = ({ toggleSidebar }) => {
  const router = useRouter();
  const name = Cookies.get("name");
  const [avatarClicked, setAvatarClicked] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState("all");
  const users = [
    {
      id: 1,
      name: "saim",
      status: "pending",
      actions: [
        <button
          key={4}
          className="px-4 py-4  bg-red-300 text-red-700 rounded-lg my-2 -white font-bold"
        >
          Delete
        </button>,
        <button
          key={5}
          className="px-4 py-4  bg-green-300  text-green-700  rounded-lg my-2 ml-4  font-bold"
        >
          Approve
        </button>,
      ],
    },
    {
      id: 2,
      name: "ali",
      status: "approved",
      actions: [
        <button
          key={7}
          className="px-4 py-4 bg-red-300 text-red-700  rounded-lg my-2  font-bold"
        >
          Delete
        </button>,
      ],
    },
    {
      id: 3,
      name: "rehman",
      status: "approved",
      actions: [
        <button
          key={8}
          className="px-4 py-4  bg-red-300 text-red-700  rounded-lg my-2  font-bold"
        >
          Delete
        </button>,
      ],
    },
  ];
  return (
    <div className={`flex flex-col items-start w-full  h-auto alegreya`}>
      <div className="w-full bg-white flex flex-row items-center justify-between relative shadow-lg px-4">
        <img
          onClick={toggleSidebar}
          src={`/assets/admin/show-sidebar.svg`}
          alt="menu-icon"
          className=" w-8 h-auto  md:hidden
            cursor-pointer"
        />
        <h1 className="text-3xl font-bold">USERS</h1>
        <div className="flex flex-row items-center justify-end  w-full z-10 py-2">
          <p className="text-indigo-700 text-xl mr-4  hidden sm:flex">{name}</p>
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
                <p className="mt-1 w-full pl-4 text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer">
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
      <h1 className="text-xl text-gray-600 px-8 mt-8">34 users found</h1>
      <nav className="py-4 px-8">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className={`flex flex-col items-center ${style.parent}`}>
                <p
                  className={`${
                    selectedUsers === "all"
                      ? "text-indigo-700"
                      : "text-indigo-400"
                  } hover:text-indigo-900 cursor-pointer`}
                  onClick={() => setSelectedUsers("all")}
                >
                  All Users
                </p>
                <div
                  className={`${
                    selectedUsers === "all" ? "w-full" : "w-0"
                  } h-[2px] bg-indigo-700 transition-all duration-300 ${
                    style.child
                  }`}
                ></div>
              </div>
              <div className={`flex flex-col items-center ${style.parent}`}>
                <p
                  className={`${
                    selectedUsers === "approved"
                      ? "text-indigo-700"
                      : "text-indigo-400"
                  } hover:text-indigo-900 cursor-pointer`}
                  onClick={() => setSelectedUsers("approved")}
                >
                  Approved users
                </p>
                <div
                  className={`${
                    selectedUsers === "approved" ? "w-full" : "w-0"
                  } h-[2px] bg-indigo-700 transition-all duration-300 ${
                    style.child
                  }`}
                ></div>
              </div>
              <div className={`flex flex-col items-center ${style.parent}`}>
                <p
                  className={`${
                    selectedUsers === "pending"
                      ? "text-indigo-700"
                      : "text-indigo-400"
                  }  hover:text-indigo-900 cursor-pointer`}
                  onClick={() => setSelectedUsers("pending")}
                >
                  Pending users
                </p>
                <div
                  className={`${
                    selectedUsers === "pending" ? "w-full" : "w-0"
                  } h-[2px] bg-indigo-700 transition-all duration-300 ${
                    style.child
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <AdminTable
        data={
          selectedUsers === "all"
            ? users
            : selectedUsers === "pending"
            ? users.filter((user) => user.status === "pending")
            : users.filter((user) => user.status === "approved")
        }
      />
    </div>
  );
};

export default AdminUi;
