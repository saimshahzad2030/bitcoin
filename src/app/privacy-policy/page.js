import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
const Page = () => {
  return (
    <>
      <Navbar bg={"bg-indigo-700"} />
      <PrivacyPolicy />

      <Footer />
      <Copyright />
    </>
  );
};

export default Page;
