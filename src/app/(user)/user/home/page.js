"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import BlankHome from "@/components/BlankHome/BlankHome";
const Page = () => {
  const [subscribed, setSubscribed] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchSubscribedStatus = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const subscribedParam = searchParams.get("subscribed");
      setSubscribed(subscribedParam === "true");
      setLoading(false);
    };

    fetchSubscribedStatus();
  }, []);

  return (
    <>
      <Navbar
        bg={"bg-indigo-700"}
        nochartAccess={true}
        calculatorPage={true}
        btnDisabled={!subscribed === "false" ? "EXIT CHART" : ""}
        selectedLink={"HOME"}
      />

      <BlankHome />
      <Footer />
      <Copyright />
    </>
  );
};

export default Page;
