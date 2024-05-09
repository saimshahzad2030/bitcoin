"use client";
import AdminResetDetails from "@/components/AdminResetDetails/AdminResetDetails";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import React, { useState } from "react";
import AdminUi from "@/components/AdminUi/AdminUi";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex flex-row items-start w-full h-auto">
      <AdminSidebar
        selectedLink={"dashboard"}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
      />
      <AdminResetDetails />
    </div>
  );
};

export default Page;
