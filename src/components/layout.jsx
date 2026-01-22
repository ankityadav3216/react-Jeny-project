import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  

  return (
    <>
      {/* Header */}
      <Header
       
      />

      {/* Buy Mega Menu */}
      

      {/* Page Content */}
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
