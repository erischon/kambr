import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Kambr",
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-sacle=1.0, width=device-width" />
      </Head>

      <div className=" flex flex-col min-h-screen max-w-screen-lg mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
