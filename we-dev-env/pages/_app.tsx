import React from "react";
import App from "next/app";
// import Layout from "../components/Layout";
import "../styles/global.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
      // <Layout>
      // </Layout>
    );
  }
}

export default MyApp;
