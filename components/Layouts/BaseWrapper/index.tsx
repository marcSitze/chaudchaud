import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from './Styles.module.css'

const BaseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseWrapper;
