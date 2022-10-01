// IMPORT COMPONENTS

import GameCards from "../../Components/GamesCard/GameCards";
import SortBy from "../../Components/SortBy/SortBy";

// IMPORT DATA
import Data from "../../Api/Data";

// IMPORT CSS
import "../../Components/GamesCard/GameCards.css";

const AllGames = () => {
  return (
    <>
      {/* <SortBy /> */}
      <p className="search-value">SHOOTER</p>
      <div className="all-games-container">
        {Data.map((Data, index) => (
          <GameCards
            card={"allGames"}
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
  // TODO if any checkbox is clicked -> display searched value, if not show not

  // if ((user.checked = false)) {
  //   return (
  //     <>
  //       <Nav />
  //       {/* <Header /> */}
  //       {/* Hier kommt das Dropdownmenü hin */}
  //       <div className="all-games-container">
  //         {Data.map((Data, index) => (
  //           <GameCards
  //             key={"Game" + index}
  //             thumbnail={Data.thumbnail}
  //             title={Data.title}
  //             short_description={Data.short_description}
  //             platform={Data.platform}
  //             genre={Data.genre}
  //           />
  //         ))}
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Nav />
  //       <Header />
  //       {/* Hier kommt das Dropdownmenü hin */}
  //       <p className="search-value">{value.checkbox}</p>
  //       <div className="all-games-container">
  //         {Data.map((Data, index) => (
  //           <GameCards
  //             key={"Game" + index}
  //             thumbnail={Data.thumbnail}
  //             title={Data.title}
  //             short_description={Data.short_description}
  //             platform={Data.platform}
  //             genre={Data.genre}
  //           />
  //         ))}
  //       </div>
  //     </>
  //   );
  // }
};

export default AllGames;
