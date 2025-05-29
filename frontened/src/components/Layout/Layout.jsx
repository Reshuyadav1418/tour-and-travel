import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

import Routers from "../../router/Routers.js";
const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
