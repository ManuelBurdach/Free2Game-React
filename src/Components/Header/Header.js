import { useLocation } from "react-router-dom";

import logo from "../../Assets/Img/Group 15.png";
import lol from "../../Assets/Img/lol.png";
import lol2 from "../../Assets/Img/lol2.png";
import lol3 from "../../Assets/Img/lol3.png";
import lol4 from "../../Assets/Img/lol4.png";
import Search from "../../Assets/Img/Search.png";

import "./Header.css";

const Header = (props) => {
  const location = useLocation();

  return (
    <header className={props.class}>
      <div className="topBar">
        <div className="topBarLogo">
          <div className="sign">
            <img src={logo} alt="" />
          </div>

          <h1>FREE2GAME</h1>
        </div>
        <div className="searchBar">
          <input type="text" id="header-search" name="s" />

          <img src={Search} alt="" />
        </div>
      </div>
      {console.log(props.src)}
      <section
        className="heroSection"
        style={{
          backgroundImage: `url("${
            location.pathname === "/AllGames"
              ? lol
              : location.pathname === "/RecentlyAdded"
              ? lol2
              : props == {}
              ? lol4
              : props.src != 0
              ? props.src
              : lol4
          }")`,
        }}
      >
        {" "}
        {location.pathname === "/AllGames" ? (
          <h2>All GAMES</h2>
        ) : location.pathname === "/RecentlyAdded" ? (
          <h2>RECENTLY ADDED</h2>
        ) : location.pathname === "/" ? (
          <h2>
            FIND & TRACK THE <br /> BEST FREE-TO-PLAY <br /> GAMES!
          </h2>
        ) : (
          <h2></h2>
        )}
      </section>
    </header>
  );
};

export default Header;

// {Data[0].screenshots[1].image}
// if (params == "AllGames"){<img src={lol} alt="" />}else if(params ==
//   "RecentlyAdded"){<img src={lol} alt="" />}else if(params == "/Detail//*"){<img src={lol} alt="" />}
