import Rect15 from "../../Assets/Img/Rect15.png";
import Rect16 from "../../Assets/Img/Rect16.png";
import Elipse from "../../Assets/Img/Ellipse 2.png";
import Line from "../../Assets/Img/Line 5.png";
import lol from "../../Assets/Img/lol.png"
import Data from "../../Api/Data";
import "./Header.css";

const Header = () => {
  // const headImg = Data[0].screenshots.image;
  let randomImg = Math.floor(Math.random() * Data.length);
  let randomImg2 = Math.floor(Math.random() * 3);
  return (
    <header>
      <div className="topBar">
        <div className="topBarLogo">
          <div className="sign">
            {" "}
            <img src={Rect15} alt="" />
            <img src={Rect16} alt="" />
          </div>

          <h1>FREE2GAME</h1>
          <h2>{""}</h2>
        </div>
        <div className="searchBar">
          <input
            type="text"
            id="header-search"

            name="s"
          />
          <img src={Elipse} alt="" />
          <img src={Line} alt="" />
        </div>
      </div>
      <section className="heroSection">
        <img src={lol} alt=""/>
      </section>
    </header>
  );
};

export default Header;


// {Data[0].screenshots[1].image}