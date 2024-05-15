"use client";
import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Navbar = ({ bg, calculatorPage, btnDisabled, selectedLink }) => {
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
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleAvatarClicked = () => {
    setAvatarClicked(!avatarClicked);
  };

  const closeAvatarDropdown = () => {
    setAvatarClicked(false);
  };

  return (
    <>
      <div
        className={`${
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
              <Link href="/" className="text-white text-xl font-bold ">
                <img
                  className="w-12 h-auto bg-no-repeat bg-center bg-cover"
                  src="/assets/landing/crypto-logo.png"
                  alt="crypto-logo"
                />
              </Link>
            </div>
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
                    <Link href="/login" className="text-white ">
                      <button className=" px-4 py-2 rounded-md border bg-indigo-700 border-indigo-700 hover:border-white hover:bg-white-700 hover:text-white transition-colors duration-500 ">
                        SIGNUP
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
                      <p
                        className={`hidden sm:flex ${
                          isScrolled ? "text-black" : "text-white"
                        } text-2xl mr-4`}
                      >
                        {name?.split(" ")[0]}
                      </p>
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
                            className={`absolute right-0 top-4 w-[150px] h-[150px] pb-8 pt-4 z-5 postsenOne  transform transition-transform duration-300 `}
                            onClick={closeAvatarDropdown}
                          >
                            <div
                              className="mt-16 flex flex-col items-center  w-full h-full rounded-lg"
                              onMouseLeave={() => setAvatarClicked(false)}
                            >
                              <div className="w-full h-auto bg-slate-100 flex flex-col items-start pt-4  rounded-lg">
                                <p
                                  className="mt-1 w-full pl-4  text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                                  onClick={() => {
                                    router.push("/user/calculator");
                                  }}
                                >
                                  Chart
                                </p>
                                <p
                                  className="mt-1 mb-4 w-full pl-4 text-red-900 text-lg font-bold transition-transform transform duration-700  hover:scale-110  cursor-pointer"
                                  onClick={() => {
                                    Cookies.remove("token");
                                    Cookies.remove("name");
                                    Cookies.remove("email");
                                    Cookies.remove("pass");
                                    router.push("/");
                                  }}
                                >
                                  Logout
                                </p>
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
          </div>
        </nav>
        {menuOpen && (
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
