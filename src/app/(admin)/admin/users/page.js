"use client";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import AdminUi from "@/components/AdminUi/AdminUi";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex flex-row items-start w-full h-auto">
      <AdminSidebar
        selectedLink={"users"}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <AdminUi />
    </div>
  );
};

export default page;
