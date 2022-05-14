import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "" }) => {
  return <div>{children}</div>;
};

export default Layout;
