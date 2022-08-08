import React from "react";
import FooterItems from "../Footer.component";

const Footer = () => {
  return (
    <footer className="text-sm px-8 pb-4 border-t-[1px] bg-[#e0ebed] lg:rounded-tr-lg lg:rounded-tl-lg">
      <FooterItems />

      <p className="text-xs">
        Kambr - &copy; 2022-{new Date().getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
