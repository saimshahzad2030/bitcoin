"use client";
import { React, useEffect, useState } from "react";
import axios from "axios";
import Unauthorized from "../Unauthorized/Unauthorized";
import { BASEURL, headersFunction } from "../../../constants/constants";
import { usePathname } from "next/navigation";
import BlankHome from "../BlankHome/BlankHome";
const ChartAuthentication = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const response = await axios.get(
          `${BASEURL}/authenticate`,
          headersFunction()
        );
        if (
          response.data.role === "admin" &&
          pathname !== "/admin/home" &&
          pathname !== "/admin/companies" &&
          pathname !== "/admin/jobs-details" &&
          pathname !== "/admin/student-details" &&
          pathname !== "/admin/students"
        ) {
          setLoading(false);
          setUserAuthenticated(false);
          return <BlankHome />;
        } else if (
          response.data.role === "user" &&
          response.data.status !== "approved"
        ) {
          setLoading(false);
          setUserAuthenticated(false);
          return <BlankHome />;
        } else {
          setLoading(false);
          setUserAuthenticated(true);
          return <>{children}</>;
        }
      } catch (error) {
        setLoading(false);
        setUserAuthenticated(false);
        return <BlankHome />;
      }
    }

    checkAuthentication();
  }, []);

  if (!userAuthenticated && !loading) {
    return <BlankHome />;
  }
  if (userAuthenticated && !loading) {
    return <>{children}</>;
  }
};

export default ChartAuthentication;
