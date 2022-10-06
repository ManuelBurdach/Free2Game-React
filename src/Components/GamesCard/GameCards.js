// IMPORT COMPONENTS
import MoreBtn from "../Btn/Read_showMore";

// IMPORT CSS
import "./GameCards.css";

// IMPORT ICONS
import Windows from "../../Assets/Icons/Windows.svg";
import Web from "../../Assets/Icons/Web.svg";

const GameCards = (props) => {
  return (
    <div className="game-cards-wrapper">
      <img src={props.thumbnail} alt="Thumbnail-game" />
      <div
        className={
          props.styling === "PC"
            ? "home-game-info-wrapper"
            : "game-info-wrapper"
        }
      >
        <h3>{props.title}</h3>
        {props.card !== "allGames" ? (
          <p className="short_description">{props.short_description}</p>
        ) : (
          <></>
        )}

        <MoreBtn value="READ MORE" />
        <div
          className={
            props.styling === "PC" ? "home-game-cards-icon" : "game-cards-icon"
          }
        >
          {props.platform.includes("Windows", "Web") ? (
            <>
              <img src={Windows} alt="" /> <img src={Web} alt="" />
            </>
          ) : props.platform.includes("Web") ? (
            <img src={Web} alt="" />
          ) : (
            <img src={Windows} alt="" />
          )}

          <p>{props.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
