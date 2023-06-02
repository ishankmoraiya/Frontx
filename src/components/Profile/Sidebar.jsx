import React, { useState } from "react";
import "./Sidebar.scss";
import {
  MdCallMade,
  MdNotifications,
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
  MdSwitchAccount,
} from "react-icons/md";
import {
  CgSearchFound,
  CgNotes,
  CgMenuLeftAlt,
  CgMenuRightAlt,
} from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ page }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  return (
    <div
      className="sidebar"
      style={{
        width: !showSidebar ? "4rem" : "20rem",
      }}
    >
      <div className={showSidebar ? "upper" : "upper upper1"}>
        {showSidebar ? (
          <CgMenuLeftAlt onClick={() => setShowSidebar(false)} />
        ) : (
          <CgMenuRightAlt onClick={() => setShowSidebar(true)} />
        )}
        {showSidebar && <Link to="/">FiNDER</Link>}
      </div>
      {!showSidebar && (
        <div className="lower lower1">
          <div
            className={location.pathname === "/submitreport" ? "active" : ""}
          >
            <Link to="/submitreport">
              <CgNotes />
            </Link>
          </div>
          <div>
            <Link>
              <MdOutlineDashboard />
            </Link>
          </div>
          <div className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">
              <MdSwitchAccount />
            </Link>
          </div>

          <div>
            <Link to="/missingreport">
              <MdOutlineReportGmailerrorred />
            </Link>
          </div>
          <div>
            <Link to="/foundmissing">
              <CgSearchFound />
            </Link>
          </div>
          <div className={location.pathname === "/allreports" ? "active" : ""}>
            <Link>
              <MdCallMade />
            </Link>
          </div>
          <div>
            <Link>
              <MdNotifications />
            </Link>
          </div>
        </div>
      )}
      {showSidebar && (
        <div className="lower">
          <div
            className={location.pathname === "/submitreport" ? "active" : ""}
          >
            <Link to="/submitreport">
              <CgNotes /> Submit Report
            </Link>
          </div>
          <div>
            <Link>
              <MdOutlineDashboard /> Dashboard
            </Link>
          </div>
          <div className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">
              <MdSwitchAccount /> Profile
            </Link>
          </div>

          <div>
            <Link to="/missingreport">
              <MdOutlineReportGmailerrorred /> Report Lost Person
            </Link>
          </div>
          <div>
            <Link to="/foundmissing">
              <CgSearchFound /> Found Lost Person
            </Link>
          </div>
          <div
            className={
              page === "viewreport" || location.pathname === "/allreports"
                ? "active"
                : ""
            }
          >
            <Link to="/allreports">
              <MdCallMade /> All Reports
            </Link>
          </div>
          <div>
            <Link>
              <MdNotifications /> Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
