// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// Pages
import Home from "./components/Home.jsx";
import PropertyDetail from "./propertydetails/propertydetail.jsx";
import PropertyList from "./propertylist/propertylist.jsx";
import EMI from "./components/EMI/EMI";
import PVC from "./components/PVC/PVC";
import RRG from "./components/RRG/RRG";
import Infobar from "./components/Infobar/Infobar.jsx";

// Auth pages
import Login from "./authentication/loginmodel/login";
import PropertyRegistration from "./authentication/propertyregistration/PropertyRegistration";

// Layout
import Layout from "./components/layout";

// Loader
import RouteLoader from "./components/RouteLoader";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2563eb",
          colorPrimaryHover: "#1d4ed8",
          colorPrimaryActive: "#1e40af",
          borderRadius: 6,
        },
      }}
    >
      <Infobar />

      <RouteLoader>
        <Routes>
          
          {/* Pages WITH Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Route>

          {/* PropertyList with header only */}
          <Route element={<Layout hideFooter={true} />}>
            <Route path="/buy/:location" element={<PropertyList />} />
          </Route>

          {/* Pages WITHOUT Layout/Header */}
          <Route path="/emi" element={<EMI />} />
          <Route path="/pvc" element={<PVC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RRG" element={<RRG />} />
          <Route
            path="/property-registration"
            element={<PropertyRegistration />}
          />
        </Routes>
      </RouteLoader>
    </ConfigProvider>
  );
}

export default App;
