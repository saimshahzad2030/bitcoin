import React from "react";
import ChartUi from "@/components/ChartUi/Chart";
import ChartAuthentication from "@/components/Authenticate/ChartAuthentication";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import Navbar from "@/components/Navbar/Navbar";
const page = () => {
  return (
    <>
      <Navbar
        bg={"bg-indigo-700"}
        calculatorPage={true}
        selectedLink={"EXIT CHART"}
      />
      <ChartAuthentication>
        <ChartUi />
        <Footer />
        <Copyright />
      </ChartAuthentication>
    </>
  );
};

export default page;
