import { useLocation } from "react-router-dom";

import Rect15 from "../../Assets/Img/Rect15.png";
import Rect16 from "../../Assets/Img/Rect16.png";
import lol from "../../Assets/Img/lol.png";
import lol2 from "../../Assets/Img/lol2.png";
import lol3 from "../../Assets/Img/lol3.png";
import lol4 from "../../Assets/Img/lol4.png";
import Search from "../../Assets/Img/search.ico";

import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="topBar">
        <div className="topBarLogo">
          <div className="sign">
            <img src={Rect15} alt="" />
            <img src={Rect16} alt="" />
          </div>

          <h1>FREE2GAME</h1>
         
          
        </div>
        <div className="searchBar">
          <input type="text" id="header-search" name="s" />

          <img src={Search} alt="" />
        </div>
      </div>
      <section
        className="heroSection"
        style={{
          backgroundImage: `url("${
            location.pathname === "/AllGames"
              ? lol
              : location.pathname === "/RecentlyAdded"
              ? lol2
              : location.pathname === "/Detail//*"
              ? lol3
              : lol4
          }")`,
        }}
      > {  location.pathname === "/AllGames"
              ? (<h2>All GAMES</h2>)
              : location.pathname === "/RecentlyAdded"
              ? (<h2>RECENTLY ADDED</h2>)
              : location.pathname === "/Detail//*"
              ? <h2></h2>
              : (<h2>FIND & TRACK THE <br /> BEST FREE-TO-PLAY <br /> GAMES!</h2>)}</section>
    </header>
  );
};

export default Header;

// {Data[0].screenshots[1].image}
// if (params == "AllGames"){<img src={lol} alt="" />}else if(params ==
//   "RecentlyAdded"){<img src={lol} alt="" />}else if(params == "/Detail//*"){<img src={lol} alt="" />}
