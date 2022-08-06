import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Kambr",
  seoData,
}: {
  children: JSX.Element;
  title: string;
  seoData: any;
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO */}
        <meta name="description" content={seoData.description} />
        {/* <meta name="image" content={seoData.image} /> */}

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        {/* <meta property="og:image" content={urlFor(seoData.image).url()} /> */}
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:creator" content={seoData.twitterUsername} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        {/* <meta name="twitter:image" content={urlFor(seoData.image).url()} /> */}
      </Head>

      <div className=" flex flex-col min-h-screen mx-auto max-w-screen-lg">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
