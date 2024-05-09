import React from "react";

const HappyUsers = () => {
  return (
    <div className="flex flex-col items-center postsenOne py-12">
      <img
        className="w-full h-auto   bg-no-repeat bg-center bg-cover"
        src="https://www.pngkey.com/png/detail/834-8345249_delight-your-customers-with-inbound-marketing-happy-customers.png"
        alt="happy users"
      />
      <h1 className="text-xl font-bold my-8">THOUSAND OF HAPPY USERS</h1>
      <h1 className="text-md text-gray-600">
        Join us today and be a part of safe trading...
      </h1>
      <button className="p-4 bg-gradient-to-r from-indigo-800 to-indigo-400  rounded-md mt-4 text-white">
        JOIN NOW
      </button>
    </div>
  );
};

export default HappyUsers;
