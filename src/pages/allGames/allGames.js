// IMPORT COMPONENTS
import GameCards from "../../Components/gamesCard/GameCards";
// import nav, header, dropdown menü TODO

// IMPORT DATA
import Data from "../../api/Data";

const AllGames = () => {
  return;
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
  </>;
};

export default AllGames;
