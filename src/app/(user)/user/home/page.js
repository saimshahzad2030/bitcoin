import React from "react";
import ChartUi from "@/components/ChartUi/Chart";
import ChartAuthentication from "@/components/Authenticate/ChartAuthentication";
const page = () => {
  return (
    <ChartAuthentication>
      <ChartUi />
    </ChartAuthentication>
  );
};

export default page;
