"use client";

import { useEffect, useState } from "react";
import style from "./AdminResetDetails.module.css";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import Cookies from "js-cookie";
import {
  Signup,
  autoLogin,
  login,
} from "../../../utils/functional-utils/user-login-utils";

const AdminResetDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState("");
  const [type, setType] = useState("");
  const [routeName, setRouteName] = useState("");
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [loginSuccesfull, setLoginSuccesfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(
      email,
      password,
      setLoading,
      setLoginSuccesfull,
      setType,
      setResponseMessage,
      (role) => {
        if (role === "admin") {
          setRouteName("");
          setLoading(false);
        }
      }
    );
    setType("");
    setResponseMessage("");
  };

  const isPasswordValid = (pass) => {
    return pass.length >= 8;
  };

  return (
    <div className={`bg-white w-full checkTest py-12 ${style.welcomePage}`}>
      <Modal
        loading={loading}
        type={type}
        message={responseMessage}
        route={routeName}
      >
        <div className="flex flex-col items-center w-full">
          <h1
            className={`text-5xl lg:text-6xl font-bold mb-12 text-center text-indigo-700 ${style.heading}`}
          >
            Admin Details
          </h1>
          <div className=" flex flex-col items-center justify-center  p-4 sm:px-4 w-11/12 sm:w-8/12 lg:w-6/12 ">
            <form
              onSubmit={handleSubmit}
              className="w-11/12  lg:w-8/12 flex flex-col items-center bg-white p-8 rounded-xl drop-shadow-lg"
            >
              <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-indigo-800">
                {loginSuccesfull ? "Your info" : "Login"}
              </h2>
              {!loginSuccesfull && (
                <h2 className="text-md font-bold mb-4 text-gray-400 ">
                  you must need to login in order to confirm that it is you
                </h2>
              )}
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {loginSuccesfull && (
                <div className="mb-4 w-full">
                  <label
                    htmlFor="username"
                    className="block text-gray-400 text-sm font-bold mb-2"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username ? username : Cookies.get("name")}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    maxLength={10}
                    required
                  />
                </div>
              )}
              <div className="mb-6 w-full relative ">
                <label
                  htmlFor="password"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setBtnDisabled(
                      !/[A-Z]/.test(e.target.value) ||
                        !/\d/.test(e.target.value) ||
                        !/[\W_]/.test(e.target.value) ||
                        e.target.value.length < 8 ||
                        e.target.value !== confirmPassword
                    );
                  }}
                  className={`pr-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  required
                />

                {showPassword ? (
                  <img
                    className={`h-4 w-4 absolute top-[50%] right-2 cursor-pointer`}
                    src="/assets/pass/show-pass.svg"
                    alt="sd"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <img
                    className={`h-4 w-4 absolute top-[50%] right-2 cursor-pointer`}
                    src="/assets/pass/hide-pass.svg"
                    alt="sd"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {loginSuccesfull && (
                <div className="mb-6 w-full">
                  <label
                    htmlFor="password"
                    className="block text-gray-400 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative flex items-center justify-between">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setBtnDisabled(
                          !/[A-Z]/.test(e.target.value) ||
                            !/\d/.test(e.target.value) ||
                            !/[\W_]/.test(e.target.value) ||
                            e.target.value.length < 8 ||
                            e.target.value !== password
                        );
                      }}
                      className={`pr-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline `}
                      required
                    />
                    {showConfirmPassword ? (
                      <img
                        className={`h-4 w-4 absolute top-3 right-2 cursor-pointer`}
                        src="/assets/pass/show-pass.svg"
                        alt="sd"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <img
                        className={`h-4 w-4 absolute top-3 right-2 cursor-pointer`}
                        src="/assets/pass/hide-pass.svg"
                        alt="sd"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>

                  <div className="w-full ">
                    <div className="flex flex-row items-center justify-between w-full mb-8">
                      {confirmPassword === password ? (
                        <>
                          <p
                            className={`text-xs sm:text-sm ${"text-gray-500"}`}
                          >
                            Password matched
                          </p>
                          <img
                            className="w-4 h-auto"
                            src="/assets/pass/tick.svg"
                            alt="sd"
                          />
                        </>
                      ) : (
                        <>
                          <p
                            className={`text-xs sm:text-sm ${"text-gray-500"}`}
                          >
                            Password doesn't match
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className={` font-bold  text-sm ${"text-gray-500"}`}>
                        Password must contain
                      </p>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full">
                      <p className={`text-xs sm:text-sm ${"text-gray-500"}`}>
                        at least 8 characters.
                      </p>
                      {isPasswordValid(password) &&
                        isPasswordValid(confirmPassword) && (
                          <img
                            className="w-4 h-auto"
                            src="/assets/pass/tick.svg"
                            alt="sd"
                          />
                        )}
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className={`text-xs sm:text-sm ${"text-gray-500"}`}>
                        numbers and characters.
                      </p>
                      {/\d/.test(password) && /\d/.test(confirmPassword) && (
                        <img
                          className="w-4 h-auto"
                          src="/assets/pass/tick.svg"
                          alt="sd"
                        />
                      )}
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className={`text-xs sm:text-sm ${"text-gray-500"}`}>
                        1 special character ($,@,..).
                      </p>
                      {/[\W_]/.test(password) &&
                        /[\W_]/.test(confirmPassword) && (
                          <img
                            className="w-4 h-auto"
                            src="/assets/pass/tick.svg"
                            alt="sd"
                          />
                        )}
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className={`text-xs sm:text-sm ${"text-gray-500"}`}>
                        1 uppercase characers.
                      </p>
                      {/[A-Z]/.test(password) &&
                        /[A-Z]/.test(confirmPassword) && (
                          <img
                            className="w-4 h-auto"
                            src="/assets/pass/tick.svg"
                            alt="sd"
                          />
                        )}
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`${
                  !loginSuccesfull
                    ? "flex flex-col items-end w-full "
                    : "flex flex-col items-center w-full "
                }`}
              >
                <button
                  disabled={loginSuccesfull && btnDisabled}
                  type="submit"
                  className={` text-white bg-indigo-700 font-bold py-2 px-4 lg:text-lg rounded focus:outline-none focus:shadow-outline`}
                >
                  {loginSuccesfull ? "update" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminResetDetails;
