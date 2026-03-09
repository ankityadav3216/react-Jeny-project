import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Infobar from "./infobar/infobar";
import Footer from "./Footer/Footer";

import "./Layout.css";

const Layout = ({ hideFooter = false }) => {
  return (
    <div className="app-layout">
      <Infobar />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
