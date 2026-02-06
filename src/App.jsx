import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

// Pages
import Home from "./components/Home.jsx";
import PropertyDetail from "./propertydetails/propertydetail.jsx";
import PropertyList from "./propertylist/propertylist.jsx";
import EMI from "./components/EMI/EMI";
import PVC from "./components/PVC/PVC";
import RRG from "./components/RRG/RRG";

// Auth pages
import Login from "./authentication/loginmodel/login";
import PropertyRegistration from "./authentication/propertyregistration/PropertyRegistration";

// Layout
import Layout from "./components/layout";

// 🔥 Route Loader (NEW)
import RouteLoader from "./components/RouteLoader";

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
        {/* 🔥 Route change loader wrapper */}
        <RouteLoader>
          <Routes>
            {/* Pages WITH Header & Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/buy/:location" element={<PropertyList />} />
            </Route>

            {/* Pages WITHOUT Header & Footer */}
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
      </Router>
    </ConfigProvider>
  );
}

export default App;
