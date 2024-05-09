"use client";
import { React, useEffect, useState } from "react";
import axios from "axios";
import Unauthorized from "../Unauthorized/Unauthorized";
import { BASEURL, headersFunction } from "../../../constants/constants";
import { usePathname, useRouter } from "next/navigation";
import BlankHome from "../BlankHome/BlankHome";
const ChartAuthentication = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
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
          // return <BlankHome />;
          router.push("/user/home");
        } else if (
          response.data.role === "user" &&
          response.data.status !== "approved"
        ) {
          setLoading(false);
          setUserAuthenticated(false);
          router.push("/user/home?subscribed=false");
        } else {
          setLoading(false);
          setUserAuthenticated(true);
          return <>{children}</>;
        }
      } catch (error) {
        setLoading(false);
        setUserAuthenticated(false);
        router.push("/user/home?subscribed=false");
      }
    }

    checkAuthentication();
  }, []);

  if (!userAuthenticated && !loading) {
    router.push("/user/home?subscribed=false");
  }
  if (userAuthenticated && !loading) {
    return <>{children}</>;
  }
};

export default ChartAuthentication;
