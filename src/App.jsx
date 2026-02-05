import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// Pages
import Home from "./components/Home.jsx";
import PropertyDetail from "./propertydetails/propertydetail.jsx";
import PropertyList from "./propertylist/propertylist.jsx";
import EMI from "./components/EMI/EMI";
import PVC from "./components/PVC/PVC"; // ✅ PVC page

// Auth pages
import Login from "./authentication/loginmodel/login";
import PropertyRegistration from "./authentication/propertyregistration/PropertyRegistration";

// Layout wrapper
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
          {/* Pages WITH Header & Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/buy/:location" element={<PropertyList />} />
          </Route>

          {/* Pages WITHOUT Header & Footer */}
          <Route path="/emi" element={<EMI />} />           {/* EMI Calculator */}
          <Route path="/pvc" element={<PVC />} />           {/* PVC Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/property-registration" element={<PropertyRegistration />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
