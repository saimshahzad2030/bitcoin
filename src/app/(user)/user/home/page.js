"use client";
import React from "react";
import ChartUi from "@/components/ChartUi/Chart";
import ChartAuthentication from "@/components/Authenticate/ChartAuthentication";
import Navbar from "@/components/Navbar/Navbar";
import LandingSection from "@/components/LandingSection/LandingSection";
import CoinsSection from "@/components/CoinsSection/CoinsSection";
import SupportedCoins from "@/components/SuppportedCoins/SupportedCoins";
import InvestmentPlan from "@/components/InvestmentPlan/InvestmentPlan";
import Services from "@/components/Services/Services";
import HappyUsers from "@/components/HappyUsers/HappyUsers";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import BlankHome from "@/components/BlankHome/BlankHome";
import { useSearchParams } from "next/navigation";
import Chart from "@/components/Chart/Chart";
const Page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("subscribed");
  console.log("search===false", typeof search);

  console.log("search===false", search === "false");
  return (
    <>
      <Navbar
        bg={"bg-indigo-700"}
        nochartAccess={true}
        calculatorPage={true}
        btnDisabled={search === "false" ? "EXIT CHART" : ""}
      />

      <BlankHome />
      <Footer />
      <Copyright />
    </>
  );
};

export default Page;
