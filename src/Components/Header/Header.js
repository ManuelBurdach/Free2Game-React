import Rect15 from "../../Assets/Img/Rect15.png";
import Rect16 from "../../Assets/Img/Rect16.png";
import Data from "../../Api/Data";
import "./Header.css"; 

const Header = () => {
  // const headImg = Data[0].screenshots.image;
   let randomImg = Math.floor(Math.random() * Data.length);
   let randomImg2 = Math.floor(Math.random() * 3);
  return (
    <header>
      
      <div className="topBar"><div>
        <img src={Rect15} alt="" />
        <img src={Rect16} alt="" />
        <h1>FREE2GAME</h1>
        <h2>{"to Do"}</h2>
      </div>
      <input
        type="text"
        id="header-search"
        placeholder="Search Game"
        name="s"
      />{" "}
      </div>
      <section className="heroSection"><img src={ Data[randomImg].screenshots[randomImg2].image 
} alt="" /></section>
      
    </header>
  );
};

export default Header;
