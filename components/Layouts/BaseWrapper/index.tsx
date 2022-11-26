import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BaseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 150, paddingBottom: 100 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseWrapper;
