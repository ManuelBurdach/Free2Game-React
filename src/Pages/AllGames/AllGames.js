// IMPORT COMPONENTS

import GameCards from "../../Components/GamesCard/GameCards";
import SortBy from "../../Components/SortBy/SortBy";

// IMPORT DATA
// import Data from "../../Api/Data";

// IMPORT CSS
import "../../Components/GamesCard/GameCards.css";
import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data);
    });
  }, []);
  return { data };
}

const AllGames = () => {
  const shooter = "shooter";
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      platform: "browser",
      category: "mmorpg",
      "sort-by": "alphabetical",
    },
    headers: {
      // process.env.REACT_APP_API_KEY
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const { data } = useFetch(options);
  console.log({ data });
  return (
    <>
      {/* <SortBy /> */}
      {}
      <p className="search-value">SHOOTER</p>
      <div className="all-games-container">
        {data.map((Data, index) => (
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
