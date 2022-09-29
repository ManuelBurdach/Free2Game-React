import "../nav/Nav.css";

// import Games_icon from "../../assets/icons/Games_icon.svg";
// import Recently_added_icon from "../../assets/icons/Recently_added_icon.svg";
// import Home_icon from "../../assets/icons/Home_icon.svg";

const Nav = () => {
  return (
    <div>
      <nav>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__btn1">
          {/* <li>
            <a>
              <img src={Home_icon} alt="Home Icon"></img>
            </a>
          </li>
          <li>
            <a>
              <img src={Games_icon} alt="All Games"></img>
            </a>
          </li>
          <li>
            <a>
              <img src={Recently_added_icon} alt="Recently Added"></img>
            </a>
          </li> */}
        </ul>

        <ul className="menu__box">
          {/* <li>
            <a>
              <img src={Home_icon} alt="Home Icon"></img>
            </a>
            <h3 className="nav-h3">Home</h3>
          </li>
          <li>
            <a>
              <img src={Games_icon} alt="All Games"></img>
            </a>
            <h3 className="nav-h3">All Games</h3>
          </li>
          <li>
            <a>
              <img src={Recently_added_icon} alt="Recently Added"></img>
            </a>
            <h3 className="nav-h3">Recently Added</h3>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
