import React from "react";

const HappyUsers = () => {
  return (
    <div className="flex flex-col items-center postsenOne py-12">
      <img
        className="w-full h-auto   bg-no-repeat bg-center bg-cover"
        src="https://www.pngkey.com/png/detail/834-8345249_delight-your-customers-with-inbound-marketing-happy-customers.png"
        alt="happy users"
      />
      <h1 className="text-xl font-bold mt-8 mb-2">THOUSAND OF HAPPY USERS</h1>
      <h1 className="text-md text-gray-600">
        Join us today and be a part of safe trading...
      </h1>
      <button className="mt-8 bg-indigo-700 border border-indigo-700 text-white  rounded-md  px-4 py-3 hover:bg-white hover:text-indigo-700 transition-colors duration-500">
        JOIN NOW
      </button>
    </div>
  );
};

export default HappyUsers;
