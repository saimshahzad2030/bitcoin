import React from "react";
import { CONTACT_US_BG } from "../../../constants/constants";

const ContactUs = () => {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-center pt-20 pb-20 postsenOne">
          <h1 className="text-3xl lg:text-5xl font-bold mt-20 ">Contact Us</h1>
          <div className="grid grid-cols-2 my-12">
            <div className="w-full h-auto">
              <img
                className="w-auto "
                src={CONTACT_US_BG.image}
                alt={CONTACT_US_BG.name}
              />
            </div>
            <form className="flex flex-col items-center justify-center w-full">
              <h1 className="text-3xl font-bold  text-indigo-700">
                Type a Query
              </h1>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              />
              <textarea
                placeholder="Message"
                className="border border-indigo-700 py-2 px-4 rounded-md mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              ></textarea>
              <button className="bg-white border border-indigo-700 text-indigo-700 rounded-md mt-8 px-4 py-3 hover:bg-indigo-700 hover:border-white hover:text-white transition-colors duration-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
