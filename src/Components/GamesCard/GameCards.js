// IMPORT COMPONENTS
import MoreBtn from "../Btn/Read_showMore";

// IMPORT CSS
import "./GameCards.css";

// IMPORT ICONS
import Windows from "../../Assets/Icons/Windows.svg";
import Web from "../../Assets/Icons/Web.svg";

const GameCards = (props) => {
  // TODO greift nicht auf number, daher füllt der nicht den DIV

  if (props.styling === "PC" && props.number === 0) {
    return (
      <div
        className="game-cards-wrapper"
        style={{
          // screenshots[0].image
          backgroundImage: `url(${props.thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {props.styling === "PC" ? (
          <p className="top-number-pc">{props.number + 1}</p>
        ) : (
          <></>
        )}
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
              props.styling === "PC"
                ? "home-game-cards-icon"
                : "game-cards-icon"
            }
          >
            {props.platform.includes("Windows") &&
            props.platform.includes("Web") ? (
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
  } else {
    return (
      <div className="game-cards-wrapper">
        <img src={props.thumbnail} alt="Thumbnail-game" />
        {props.styling === "PC" ? (
          <p className="top-number-pc">{props.number + 1}</p>
        ) : (
          <></>
        )}

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
              props.styling === "PC"
                ? "home-game-cards-icon"
                : "game-cards-icon"
            }
          >
            {props.platform.includes("Windows") &&
            props.platform.includes("Web") ? (
              <>
                <img src={Windows} alt="" />
                <img src={Web} alt="" />
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
  }
};

export default GameCards;
