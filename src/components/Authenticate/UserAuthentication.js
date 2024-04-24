"use client";
import { React, useEffect, useState } from "react";
import axios from "axios";
import Unauthorized from "../Unauthorized/Unauthorized";
import { BASEURL, headersFunction } from "../../../constants/constants";
import { usePathname } from "next/navigation";
const UserAuthentication = ({ children }) => {
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

        console.log("role", response.data);
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
          return <Unauthorized />;
        } else if (response.data.role === "user" && pathname !== "/user/home") {
          setLoading(false);
          setUserAuthenticated(false);
          return <Unauthorized />;
        } else {
          setLoading(false);
          setUserAuthenticated(true);
          return <>{children}</>;
        }
      } catch (error) {
        setLoading(false);
        setUserAuthenticated(false);
        console.log(error);
        return <Unauthorized />;
      }
    }

    checkAuthentication();
  }, [loading, userAuthenticated]);

  if (!userAuthenticated && !loading) {
    return <Unauthorized />;
  }
  if (userAuthenticated && !loading) {
    return <>{children}</>;
  }
};

export default UserAuthentication;
