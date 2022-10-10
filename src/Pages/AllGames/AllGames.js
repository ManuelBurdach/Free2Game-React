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
  }, [options.params.platform]);
  return { data };
}

const AllGames = () => {
  const [sortBy, setSortBy] = useState("all");

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      platform: "",
      "sort-by": "alphabetical",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  if (sortBy === "all") {
    delete options.params.platform;
  } else {
    options.params.platform = sortBy;
  }

  const { data } = useFetch(options);
  console.log(data);
  return (
    <>
      <form className="sortBy">
        <label htmlFor="sortBy">Platform</label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="sortBy"
            id=""
            onClick={() => setSortBy("pc")}
          />
          "bla"
        </label>
      </form>
      <p className="search-value" onClick={() => setSortBy("browser")}>
        {options.params.platform}
      </p>
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
};

export default AllGames;
