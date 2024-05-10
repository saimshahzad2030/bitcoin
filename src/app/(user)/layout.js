import ChartAuthentication from "@/components/Authenticate/ChartAuthentication";
import UserAuthentication from "@/components/Authenticate/UserAuthentication";
import Modal from "@/components/Modal/Modal";
import React from "react";
const layout = ({ children }) => {
  // return <UserAuthentication>
  //   <ChartAuthentication>

  //   </ChartAuthentication>
  // </UserAuthentication>;
  return children;
};

export default layout;
