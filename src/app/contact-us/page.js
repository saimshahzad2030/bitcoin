import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import ContactUs from "@/components/ContactUs/ContactUs";
const ContactPage = () => {
  return (
    <>
      <Navbar bg={"bg-indigo-700"} />
      <ContactUs />

      <Footer />
      <Copyright />
    </>
  );
};

export default ContactPage;
