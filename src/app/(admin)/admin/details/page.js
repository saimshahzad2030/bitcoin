"use client";
import React, { useState } from "react";
import AdminResetDetails from "@/components/AdminResetDetails/AdminResetDetails";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex flex-row items-start w-full h-auto">
      <AdminSidebar
        selectedLink={""}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
      />
      <AdminResetDetails />
    </div>
  );
};

export default page;
