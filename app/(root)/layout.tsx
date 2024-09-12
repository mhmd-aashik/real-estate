import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#141414]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
