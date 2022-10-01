// IMPORT COMPONENTS
import GameCards from "../../Components/GamesCard/GameCards";
import hierkommtdienav from "../../Components/Nav"; //TODO
import Header from "../../Components/Header/Header";
import hierkommtdropdown from "../../Components/dropdownMenu/"; // TODO

// IMPORT DATA
import Data from "../../Api/Data";

// IMPORT CSS
import "./AllGames.css";

const AllGames = () => {
  return (
    <>
      {/* Hier kommt die Nav */};
      <Header />
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
