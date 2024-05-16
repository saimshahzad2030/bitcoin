import React from "react";
import { CONTACT_US } from "../../../constants/constants";

const ContactUs = () => {
  return (
    <div className="w-full h-auto relative">
      <div className="z-10 absolute bottom-0 w-full h-[200px] bg-indigo-700"></div>
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center pt-20  postsenOne">
          <div className=" z-20 grid grid-cols-1 md:grid-cols-2 mt-12  relative">
            <div className="flex flex-col items-start px-6 ">
              <h1 className="text-3xl  font-bold mt-20 ">GET IN TOUCH</h1>
              <p className="mb-8 w-9/12 mt-4">
                Stay Connected with us via different platform to get updated
                with our latest features and protocols
              </p>
              {CONTACT_US.map((contact, index) => (
                <div className="flex flex-row items-center mt-4" key={index}>
                  <img
                    className="w-8 h-auto"
                    src={contact.image}
                    alt={contact.name}
                  />{" "}
                  <p className="ml-8">{contact.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center w-full">
              <form className="flex flex-col items-center justify-center w-10/12 shadow-2xl mt-12 md:mt-56 py-8 bg-white  px-6">
                <h1 className="text-3xl font-bold  text-center ">
                  SAY SOMETHING
                </h1>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-indigo-700 py-2 px-4  mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-indigo-700 py-2 px-4  mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
                />
                <textarea
                  placeholder="Message"
                  className="h-32 border border-indigo-700 py-2 px-4  mt-4 w-full sm:w-9/12 lg:w-9/12 focus:outline-none focus:ring-2 focus:ring-indigo-700"
                ></textarea>
                <button className=" w-full sm:w-9/12 lg:w-9/12  bg-white border border-indigo-700 text-indigo-700 rounded-md mt-4 px-4 py-3 hover:bg-indigo-700 hover:border-white hover:text-white transition-colors duration-500">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
