import React from "react";
import { Drawer, Divider } from "antd";
import "./HeaderProfileBar.css";

const HeaderProfileBar = ({ open, onClose }) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
      width={300}
      bodyStyle={{ padding: "20px" }}
    >
      {/* User Name */}
      <div className="sidebar-username">Ankit Yadav</div>

      <Divider />

      {/* Main Menu */}
      <div className="sidebar-menu">
        <div className="sidebar-item">
          Post Property <span className="free-badge">FREE</span>
        </div>

        <div className="sidebar-item owner-plans">
          Owner Plans <span className="red-dot"></span>
        </div>

        <div className="sidebar-item">Manage Listings</div>
        <div className="sidebar-item">View Responses</div>
        <div className="sidebar-item">Manage Profile</div>
        <div className="sidebar-item">Change Password</div>
        <div className="sidebar-item">Logout</div>
      </div>

      <Divider />

      {/* My Activity */}
      <div className="sidebar-activity">
        <div className="activity-title">My Activity</div>
        <div className="sidebar-item">Recent Searches</div>
        <div className="sidebar-item">Contacted properties</div>
        <div className="sidebar-item">Shortlisted properties</div>
        <div className="sidebar-item">Viewed properties</div>
      </div>
    </Drawer>
  );
};

export default HeaderProfileBar;
