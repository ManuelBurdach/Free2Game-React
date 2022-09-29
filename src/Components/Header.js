import Rectangle15 from "../assets/img/Rectangle 15.png";
import Rectangle16 from "../assets/img/Rectangle 16.png";
import Data from "../api/Data"


const Header = () => {
    const headImg = Data[0].screenshots.image;
    return (
    <header>
      <div>
        <img src={Rectangle15} alt="" />
        <img src={Rectangle16} alt="" />
        <h1>FREE2GAME</h1>
      </div>
      <input
        type="text"
        id="header-search"
        placeholder="Search Game"
        name="s"
      /> <br />

      <img src={headImg} alt="" />
    </header>
  );
};

export default Header;
