import "./Nav.css";
// import { Link } from "react-router-dom";

import Games_icon from "../../Assets/Icons/Games_icon.svg";
import Recently_added_icon from "../../Assets/Icons/Recently_added_icon.svg";
import Home_icon from "../../Assets/Icons/Home_icon.svg";
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-header">
        <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
      </div>
      <div className="sidebar-items">
        <div className="item">
          <img src={Home_icon}></img>
          <h3 className="sidebar-text">All Games</h3>
        </div>
        <div className="item">
          <img src={Games_icon}></img>
          <h3 className="sidebar-text">All Games</h3>
        </div>
        <div className="item">
          <img src={Recently_added_icon}></img>
          <h3 className="sidebar-text">All Games</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
