import UserAuthentication from "@/components/Authenticate/UserAuthentication";
import React from "react";
const layout = ({ children }) => {
  return <UserAuthentication>{children}</UserAuthentication>;
};

export default layout;
