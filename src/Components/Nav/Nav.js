// IMPORT MODULES
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

// IMPORT CSS
import "./Nav.css";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import Games_icon from "../../Assets/Icons/Games_icon.svg";
import Recently_added_icon from "../../Assets/Icons/Recently_added_icon.svg";
import Home_icon from "../../Assets/Icons/Home_icon.svg";

// AUFBAU DER NAV
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
        <Link to="/">
          <div className="item">
            <img src={Home_icon} alt="Icon Home"></img>
            <h3 className="sidebar-text">Home</h3>
          </div>
        </Link>
        <Link to="/AllGames">
          <div className="item">
            <img src={Games_icon} alt="Icon All Games"></img>
            <h3 className="sidebar-text">All Games</h3>
          </div>
        </Link>
        <Link to="/RecentlyAdded">
          <div className="item">
            <img src={Recently_added_icon} alt="Icon Recently Added"></img>
            <h3 className="sidebar-text">Recently Added</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
