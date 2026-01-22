// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
// import "./App.css";

// Pages
import Home from "./components/Home.jsx";
import PropertyDetail from "./propertydetails/propertydetail.jsx";
import PropertyList from './propertylist/propertylist.jsx';
import Auth from "./authentication/auth";

// Layout
import Layout from "./components/layout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#dc2626",
          borderRadius: 6,
        },
      }}
    >
      <Router>
        <Routes>
          {/* 🔹 Pages WITH Header & Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Route>

          {/* 🔹 Auth pages WITHOUT Header & Footer */}
          <Route path="/auth/*" element={<Auth />} />


          <Route path="/buy/:location" element={<PropertyList />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
