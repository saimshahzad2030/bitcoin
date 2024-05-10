import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={` bg-indigo-700-400 h-auto w-full `}>
      <div className=" container mx-auto py-4  w-full flex flex-col items-center postsenOne">
        <p className="text-lg text-indigo-700  ">
          &copy; {currentYear} MyCompany. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
