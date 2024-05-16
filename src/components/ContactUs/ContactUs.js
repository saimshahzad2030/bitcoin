import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-20 postsenOne">
      <h1 className="text-3xl font-bold mt-20">ContactUs</h1>
      <form className="flex flex-col items-center w-10/12">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-5/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-5/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
        />
        <textarea
          placeholder="Message"
          className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-5/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
        ></textarea>
        <button className="bg-white border border-indigo-700 text-indigo-700 rounded-md mt-8 px-4 py-3 hover:bg-indigo-700 hover:border-white hover:text-white transition-colors duration-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
