"use client";

import { useEffect, useState } from "react";
import style from "./WelcomePage.module.css";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import { WELCOMEPAGE } from "../../../constants/constants";
import { sendVerificationEmail } from "../../../utils/functional-utils/verification-email-utils";
import { matchToken } from "../../../utils/functional-utils/match-token-utils";
import {
  Signup,
  autoLogin,
  login,
} from "../../../utils/functional-utils/user-login-utils";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
const WelcomePage = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [token, setToken] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [signupSuccesfull, setSignupSuccesfull] = useState(false);
  const [loginSuccesfull, setLoginSuccesfull] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState("");
  const [type, setType] = useState("");
  const [routeName, setRouteName] = useState("");
  const [finalLoading, setFinalLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(
        email,
        password,
        setLoading,
        setLoginSuccesfull,
        setType,
        setResponseMessage,
        (role) => {
          if (role === "admin") {
            setRouteName("/admin/home");
            setLoading(false);
          } else if (role === "user") {
            setRouteName("/user/home");
            setLoading(false);
          }
        }
      );
      setType("");
      setResponseMessage("");
    } else {
      if (!emailEntered) {
        sendVerificationEmail(
          email,
          setLoading,
          setEmailEntered,
          setType,
          setResponseMessage
        );
        setType("");
        setResponseMessage("");
      } else if (emailEntered && !emailVerified) {
        matchToken(
          email,
          token,
          setLoading,
          setEmailVerified,
          setType,
          setResponseMessage
        );
        setType("");
        setResponseMessage("");
      } else if (emailEntered && emailVerified) {
        setType("");
        setResponseMessage("");
        Signup(
          email,
          username,
          password,
          setLoading,
          setSignupSuccesfull,
          setType,
          setResponseMessage,
          (role) => {
            if (role === "admin") {
              setRouteName("/admin/home");
              setLoading(false);
            } else if (role === "user") {
              setRouteName("/user/home");
              setLoading(false);
              setIsLogin(true);
              setEmail("");
              setPassword("");
              setToken("");
              setEmailEntered(false);
              setEmailVerified(false);
            }
          }
        );
      }
    }
  };
  useEffect(() => {
    autoLogin(setLoading, (role) => {
      if (role === "user") {
        router.push("/user/home");
      }
    });
  }, []);

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  return (
    <div
      className={`bg-gradient-to-b from-indigo-900 to-indigo-500  py-12 ${style.welcomePage}`}
    >
      <Modal
        loading={loading}
        type={type}
        message={responseMessage}
        route={routeName}
      >
        <div>
          <h1
            className={`text-5xl lg:text-6xl font-bold mb-12 text-center text-gray-50 ${style.heading}`}
          >
            Crypto Exit Calculator
          </h1>
          <div className="grid sm:grid-cols-1  lg:sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:md:grid-cols-2 ">
            <CustomCarousel />
            <div className=" flex flex-col items-center justify-center  p-6 sm:px-16 w-full ">
              <form
                onSubmit={handleSubmit}
                className="w-11/12  lg:w-8/12 flex flex-col items-center bg-white p-8 rounded-xl "
              >
                <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-indigo-800">
                  {isLogin ? "Login" : "Sign Up"}
                </h2>
                {!isLogin && emailVerified && (
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="username"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                )}

                {isLogin ? (
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
                ) : (
                  !emailEntered && (
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
                  )
                )}

                {!isLogin && emailEntered && !emailVerified && (
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="username"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      (We have sent you a verification email @ {email} enter
                      that token below)
                    </label>
                    <input
                      type="text"
                      id="token"
                      value={token}
                      placeholder="Enter Token..."
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const numericInput = inputValue.replace(/[^0-9]/g, "");
                        setToken(numericInput);
                      }}
                      maxLength={6}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                )}

                {isLogin ? (
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="password"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                      required
                    />
                  </div>
                ) : (
                  emailVerified && (
                    <div className="mb-6 w-full ">
                      <label
                        htmlFor="password"
                        className="block text-gray-400 text-sm font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (e.target.value.length < 8) {
                            setBtnDisabled(true);
                          } else {
                            setBtnDisabled(false);
                          }
                        }}
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline `}
                        required
                      />
                      {!isPasswordValid(password) && (
                        <p className={` text-sm ${"text-gray-500"}`}>
                          Password must be at least 8 characters long.
                        </p>
                      )}
                    </div>
                  )
                )}

                <div
                  className={`${
                    !emailEntered && !isLogin
                      ? "flex flex-col items-end w-full "
                      : "flex flex-col items-center w-full "
                  }`}
                >
                  <button
                    disabled={
                      !isLogin && emailEntered && emailVerified && btnDisabled
                    }
                    type="submit"
                    className={` text-white font-bold py-2 px-4 lg:text-lg rounded focus:outline-none focus:shadow-outline ${
                      !isLogin && emailEntered && emailVerified && btnDisabled
                        ? "bg-gray-600"
                        : "bg-indigo-800 hover:bg-indigo-700"
                    }`}
                  >
                    {isLogin
                      ? "Login"
                      : !emailEntered
                      ? "Next"
                      : emailEntered && !emailVerified
                      ? "VerifyEmail"
                      : emailEntered && emailVerified && "signin"}
                  </button>
                </div>
                <p className="mt-4 text-black">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-indigo-800 hover:underline focus:outline-none"
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WelcomePage;
