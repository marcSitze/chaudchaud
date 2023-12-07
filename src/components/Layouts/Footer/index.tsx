import React from "react";
import Image from "next/image";
import styles from './Styles.module.css'
import FooterItem from "./FooterItem";
import Logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <section className={`${styles.footer} bg-black pb-8`}>
      <div className="flex justify-evenly flex-wrap">
        <FooterItem title="Quick Links" list={[]} />
        <FooterItem title="Services" list={[]} />
        <FooterItem title="Social Media" list={[]} />
        <FooterItem title="About" list={[]} />
      </div>
      <div className="text-center flex flex-col items-center">
        <Image className="w-1/3 md:w-1/5" src={Logo} alt="logo"/>
        <p className="text-white text-base">&copy; Copyright 2022 @theblackdev</p>
      </div>
    </section>
  );
};

export default Footer;
