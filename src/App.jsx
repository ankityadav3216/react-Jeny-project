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

// Directly import auth pages
import Login from "./authentication/loginmodel/login";
import PropertyRegistration from "./authentication/propertyregistration/PropertyRegistration";

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
          <Route path="/login" element={<Login />} />
          <Route path="/property-registration" element={<PropertyRegistration />} />

          {/* 🔹 Property List */}
          <Route path="/buy/:location" element={<PropertyList />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
