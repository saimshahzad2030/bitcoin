"use client";
import React, { useState, useEffect } from "react";
import style from "./Modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({
  children,
  loading,
  type,
  message,
  route,
  setFinalLoading,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
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
  return isVisible ? (
    <div
      className={`w-screen h-screen flex justify-center items-center ${style.main} drop-shadow-lg`}
    >
      <div className="rounded-lg bg-white p-8">
        <div className="flex justify-center mb-4">
          {type !== "" && type === "failed" && (
            <img
              src="/assets/response/failed.png"
              className="h-12 2-12"
              alt="success"
            />
          )}

          {type !== "" && type === "success" && (
            <img
              src="/assets/response/success.png"
              className="h-12 2-12"
              alt="success"
            />
          )}
          {(type === "" || !type) && (
            <div className="rounded-full h-12 w-12 border-t-4 border-blue-500 animate-spin"></div>
          )}
        </div>
        <p className="text-center">{message}</p>
      </div>
    </div>
  ) : children ? (
    children
  ) : null;
};

export default Modal;
