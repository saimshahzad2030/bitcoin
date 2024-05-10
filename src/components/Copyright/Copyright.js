import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={` bg-white h-auto w-full `}>
      <div className=" container mx-auto py-4  w-full flex flex-col items-center postsenOne">
        <p className="text-sm sm:text-lg text-indigo-700  text-center ">
          &copy; {currentYear} MyCompany. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
