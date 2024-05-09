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
const page = () => {
  return (
    <>
      <Navbar bg={"bg-indigo-700"} />
      <div className="container mx-auto  ">
        <div className="relative flex-col items-center">
          <LandingSection />
        </div>
      </div>
      <div className="h-[100vh] w-full bg-indigo-700"></div>
      <CoinsSection />
      <div className="container mx-auto  ">
        <SupportedCoins />
        <InvestmentPlan />
        <Services />
        <HappyUsers />
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
