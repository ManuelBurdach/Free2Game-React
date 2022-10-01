import "./Nav.css";

import Games_icon from "../../assets/icons/Games_icon.svg";
import Recently_added_icon from "../../assets/icons/Recently_added_icon.svg";
import Home_icon from "../../assets/icons/Home_icon.svg";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
            <div className="test">
              <img src={Home_icon} alt="hi"></img>
              <img src={Games_icon} alt="hi"></img>
              <img src={Recently_added_icon} alt="hi"></img>
            </div>

            {/* <Link to="/">{Home_icon}</Link> */}
          </label>

          <ul className="menu__box">
            <li className="menu__item">
              <h3 className="nav-h3"> Home</h3>
            </li>
            <li className="menu__item">
              <h3 className="nav-h3"> All Games</h3>
            </li>
            <li className="menu__item">
              <h3 className="nav-h3"> Recently Added</h3>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
