import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
