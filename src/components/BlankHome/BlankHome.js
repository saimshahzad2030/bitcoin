import React from "react";
import style from "./BlankHome.module.css";
import Cookies from "js-cookie";
const BlankHome = () => {
  const name = Cookies.get("name");
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row items-center justify-end  w-full bg-gray-200 p-4">
        <div className="flex flex-col items-center justify-center h-12 w-12 bg-gray-700 rounded-full">
          <p className="text-white text-3xl font-bold">
            {name.charAt(0).toUpperCase()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start  w-full p-4 my-20 sm:px-40">
        <p className={`text-black mx-4 text-4xl ${style.text}`}>
          Hey <span className="text-4xl font-bold">{name}</span>,
        </p>
        <p className={`text-black mx-4 text-2xl ${style.text}`}>
          hope you are doing well, Your account is pending approval from an
          administrator. You won't be able to access the features of our
          application until your account is approved. Please wait patiently for
          further instructions.
        </p>
      </div>
    </div>
  );
};

export default BlankHome;
