import React from "react";
import Head from "next/head";
import Footer from "./globalComps/Footer";
import Navbar from "./globalComps/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Transglobe</title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
