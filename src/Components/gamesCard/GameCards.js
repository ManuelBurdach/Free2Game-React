// IMPORT COMPONENTS
import MoreBtn from "../../Components/btn/read_showMore";

// IMPORT CSS
import "./GameCards.css";

// TODO props in überall da definieren wo GameCards vorkommt

const GameCards = (props) => {
  return (
    <div className="game-cards-container">
      <img src={props.thumbnail} alt="Thumbnail-game" />
      <div className="game-info-wrapper">
        <h3>{props.title}</h3>
        <p>{props.short_description}</p>
        <MoreBtn value="READ MORE" />
        <div className="game-cards-icon">
          <img src={props.platform} alt="Platform Icon" />
          <p>{props.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
