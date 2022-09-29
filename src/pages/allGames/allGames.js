// IMPORT COMPONENTS
import GameCards from "../../Components/gamesCard/GameCards";
import hierkommtdienav from "../../Components/nav";
import hierkommtderheader from "../../Components/header";
import hierkommtdropdown from "../../Components/dropdownMenu/";

// IMPORT DATA
import Data from "../../api/Data";

// IMPORT CSS
import "./AllGames.css";

const AllGames = () => {
  return (
    <>
      {/* Hier kommt die Nav */};{/* Hier kommt der Header */};
      {/* Hier kommt das Dropdownmenü hin */}
      <div className="all-games-container">
        {Data.map((Data, index) => (
          <GameCards
            key={"Game" + index}
            thumbnail={Data.thumbnail}
            title={Data.title}
            short_description={Data.short_description}
            platform={Data.platform}
            genre={Data.genre}
          />
        ))}
      </div>
    </>
  );
};

export default AllGames;
