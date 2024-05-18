"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Navbar = ({
  bg,
  calculatorPage,
  btnDisabled,
  selectedLink,
  loginPage,
}) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [avatarClicked, setAvatarClicked] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const name = Cookies.get("name");
  React.useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeAvatarDropdown = () => {
    setAvatarClicked(false);
  };

  //remaining subscripption time code
  const [remainingTime, setRemainingTime] = React.useState(""); // State to manage remaining time
  React.useEffect(() => {
    const subscriptionEndDate = new Date("2024-06-01T00:00:00Z");
    const updateRemainingTime = () => {
      const now = new Date();
      const timeDiff = subscriptionEndDate - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={` ${
          isScrolled ? "   border-b border-gray-500 shadow-lg " : bg
        } ${style.blurredBackground}   h-auto w-full fixed z-30`}
      >
        <nav
          className={`postsenOne  container mx-auto py-3 z-40 px-4 ${
            isScrolled ? style.blurredBackground : ""
          }
          
          `}
        >
          <div className=" flex flex-row justify-between items-center">
            <div>
              <Link
                href="/"
                className="text-white text-xl font-bold flex flex-row items-center"
              >
                <img
                  className="w-12 h-auto bg-no-repeat bg-center bg-cover"
                  src="/assets/landing/crypto-logo.png"
                  alt="crypto-logo"
                />
                <span
                  className={`ml-6  ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Crypto Exit Calculator
                </span>
              </Link>
            </div>
            {!loginPage && (
              <ul className="flex space-x-4 flex-row items-center">
                {name && (
                  <>
                    {" "}
                    <li className="hidden sm:flex">
                      <Link
                        href="/user/home"
                        disable={true}
                        className={` ${
                          style.parent
                        } text-md flex flex-col items-center  font-bold hover:scale-110 transition-transform duration-300  ${
                          isScrolled ? "text-black" : "text-white"
                        }
                      `}
                      >
                        <h1>HOME</h1>
                        <div
                          className={`${
                            selectedLink === "HOME" ? "w-full" : "w-0"
                          } h-[2px] ${
                            isScrolled ? "bg-indigo-700 " : "bg-white "
                          } transition-all duration-300 ${style.child}
                        `}
                        ></div>
                      </Link>
                    </li>
                    <li
                      className={`hidden sm:flex  ${
                        btnDisabled === "EXIT CHART" ? "sm:hidden" : "sm:flex"
                      }`}
                    >
                      <Link
                        href={`${name ? "/user/calculator" : "/login"}`}
                        className={` ${
                          style.parent
                        } text-md flex flex-col items-center  font-bold hover:scale-110 transition-transform duration-300  ${
                          isScrolled ? "text-black" : "text-white"
                        }
                     

                      `}
                      >
                        <h1>EXIT CHART</h1>
                        <div
                          className={`${
                            selectedLink === "EXIT CHART" ? "w-full" : "w-0"
                          }  h-[2px] ${
                            isScrolled ? "bg-indigo-700 " : "bg-white "
                          } transition-all duration-300 ${style.child}`}
                        ></div>
                      </Link>
                    </li>
                  </>
                )}
                {!name ? (
                  <>
                    <li className="hidden sm:flex">
                      <Link href="/login?signin=true" className="text-white ">
                        <button className=" px-4 py-2 rounded-md border bg-indigo-700 border-indigo-700 hover:border-white hover:bg-white-700 hover:text-white transition-colors duration-500 ">
                          Login
                        </button>
                      </Link>
                    </li>
                    <div className="block sm:hidden">
                      <button
                        onClick={toggleMenu}
                        className={`text-2xl ${
                          isScrolled ? "text-indigo-700" : "text-white"
                        }`}
                      >
                        {menuOpen ? "\u2716" : "\u2630"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <li className="">
                      <div className="relative flex flex-row items-center justify-end  w-full p-4 z-10 postsenOne ">
                        <div
                          className={`flex flex-col items-center justify-center h-12 w-12 ${
                            isScrolled ? "bg-indigo-700" : "bg-white"
                          } rounded-full cursor-pointer`}
                        >
                          <p
                            className={`${
                              isScrolled ? "text-white" : "text-indigo-700"
                            } text-3xl font-bold`}
                            onClick={() => {
                              avatarClicked
                                ? setAvatarClicked(false)
                                : setAvatarClicked(true);
                            }}
                          >
                            {name?.split(" ")[0]?.charAt(0).toUpperCase()}
                          </p>
                          {avatarClicked && (
                            <div
                              id="avatarDiv"
                              className={`absolute right-0 top-0 w-[250px] h-[150px] pb-8 pt-4 z-5 postsenOne  transform transition-transform duration-300 `}
                              onClick={closeAvatarDropdown}
                            >
                              <div
                                className="mt-16 flex flex-col items-center  w-full h-full rounded-lg"
                                onMouseLeave={() => setAvatarClicked(false)}
                              >
                                <div className="w-full h-auto bg-slate-100 flex flex-col items-start pt-4  rounded-lg">
                                  <p className="mt-1 w-full  font-bold pl-4  text-lg first-letter:uppercase">
                                    {name?.split(" ")[0]}
                                  </p>
                                  <p className="mt-1 w-full pl-4  text-lg first-letter:uppercase">
                                    Current Plan: Subscribed
                                  </p>
                                  <p className="mt-1 w-full pl-4  text-lg first-letter:uppercase">
                                    valid till {remainingTime}
                                  </p>
                                  <p
                                    className="mt-12 w-full pl-4  text-lg    transition-transform transform duration-500  hover:scale-105 cursor-pointer"
                                    onClick={() => {
                                      router.push("/user/calculator");
                                    }}
                                  >
                                    Account settings
                                  </p>
                                  <p
                                    className="mt-1 w-full pl-4  text-lg    transition-transform transform duration-500  hover:scale-105 cursor-pointer"
                                    onClick={() => {
                                      router.push("/user/calculator");
                                    }}
                                  >
                                    Chart
                                  </p>
                                  <button
                                    className="bg-white border border-red-500 mt-1 mb-4 w-auto ml-4 px-3 py-2  text-red-600 text-lg font-bold cursor-pointer rounded-md hover:text-white hover:bg-red-600 hover:border-white transition-colors duration-300"
                                    onClick={() => {
                                      Cookies.remove("token");
                                      Cookies.remove("name");
                                      Cookies.remove("email");
                                      Cookies.remove("pass");
                                      router.push("/");
                                    }}
                                  >
                                    Logout
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>{" "}
                    <div className="block sm:hidden">
                      <button
                        onClick={toggleMenu}
                        className={`text-2xl ${
                          isScrolled ? "text-indigo-700" : "text-white"
                        }`}
                      >
                        {menuOpen ? "\u2716" : "\u2630"}
                      </button>
                    </div>
                  </>
                )}
              </ul>
            )}
          </div>
        </nav>
        {!loginPage && menuOpen && (
          <div className="sm:hidden relative postsenOne">
            <ul
              className={`absolute py-8 top-30 z-50 right-0  shadow-lg bg-white
              } py-2 px-4 w-full flex  flex-col items-center`}
            >
              {name ? (
                <>
                  <li className=" mt-4">
                    <Link
                      href="/user/home"
                      className={`text-xl font-bold text-indigo-700
                      `}
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li className=" mt-4">
                    <Link
                      href={name ? "/user/calculator" : "/login"}
                      className={`text-xl font-bold text-indigo-700`}
                      onClick={closeMenu}
                    >
                      Exit Chart
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="text-white text-xl font-bold"
                    >
                      <button
                        className={`p-3 rounded-lg  hover:scale-110 transition-transform duration-300  ${
                          isScrolled
                            ? "bg-indigo-700 text-white"
                            : "bg-white text-indigo-700 "
                        }`}
                      >
                        Signup
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      {calculatorPage && <div className="h-36 bg-white w-full"></div>}
    </>
  );
};

export default Navbar;
