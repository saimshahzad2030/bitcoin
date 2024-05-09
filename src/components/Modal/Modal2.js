"use client";
import React, { useState, useEffect } from "react";
import style from "./Modal.module.css";
import { useRouter } from "next/navigation";

const Modal2 = ({ children, loading, type, message, route, margin }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("message:", message);

    if (loading) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(
        () => {
          if (route !== "" && message === "login successful") {
            router.push(route);
          } else {
            setIsVisible(false);
          }
        },
        !type ? 100 : 1500
      );
      return () => clearTimeout(timeoutId);
    }
  }, [loading]);
  return isVisible
    ? // Check if type is empty or not provided, render loader if true
      (type === "" || !type) && (
        <div
          className={`rounded-full h-4 w-4 border-t-4 border-white animate-spin ${margin}`}
        ></div>
      )
    : children
    ? children
    : null;
};

export default Modal2;
