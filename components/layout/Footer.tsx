import React from "react";
import FooterItems from "../Footer.component";

const Footer = () => {
  return (
    <footer className="text-sm bg-slate-800 text-white px-8 pb-4 lg:rounded-tr-lg lg:rounded-tl-lg">
      <FooterItems />

      <p className="text-xs text-right">
        Kambr - &copy; 2022-{new Date().getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
