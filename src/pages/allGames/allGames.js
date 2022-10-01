// IMPORT COMPONENTS

import GameCards from "../../Components/GamesCard/GameCards";
import Nav from "../../Components/Nav/Nav";
// import Header from "../../Components/Header/Header";
// import hierkommtdropdown from "../../Components/DropdownMenu/"; // TODO

// IMPORT DATA
import Data from "../../Api/Data";

// IMPORT CSS
import "./AllGames.css";

// checkbox muss definiert werden und dann mit USER ersetzen

const AllGames = () => {
  return (
    <>
      <Nav />
      {/* <Header /> */}
      {/* Hier kommt das Dropdownmenü hin {value.checkbox} */}
      <p className="search-value">shooter</p>
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
