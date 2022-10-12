// IMPORT COMPONENTS

import GameCards from "../../Components/GamesCard/GameCards";

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
  }, [options.params.platform, options.params.category, options.params["sort-by"]]);
  return { data };
}

const AllGames = () => {
  const [sortBy, setSortBy] = useState("all");
  const [sortByGenre, setSortByGenre] = useState("all");
  const [sortByDate, setSortByDate] = useState("all");

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      platform: "",
      category: "",
      "sort-by": "",
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

  if (sortByGenre === "all") {
    delete options.params.category;
  } else {
    options.params.category = sortByGenre;
  }

  if (sortByDate === "all") {
    delete options.params["sort-by"];
  } else {
    options.params["sort-by"] = sortByDate;
  }

  const { data } = useFetch(options);
  console.log(data);

  return (
    <>
      <section className="dropdown">
        <form className="sortBy">
          <p
            onClick={() => {
              document.querySelector(`.sortBy:nth-of-type(1) div`).classList.toggle("activ");
            }}
          >
            Platform <span>V</span>
          </p>
          <div>
            <button
              type="button"
              onClick={() => {
                setSortBy("all");
              }}
            >
              <div></div>All Platforms
            </button>
            <button
              type="button"
              onClick={() => {
                setSortBy("pc");
              }}
            >
              <div></div>Windows (Pc)
            </button>
            <button
              type="button"
              onClick={() => {
                setSortBy("browser");
              }}
            >
              <div></div>Browser (Web)
            </button>
          </div>
        </form>
        <form className="sortBy">
          <p
            onClick={() => {
              document.querySelector(`.sortBy:nth-of-type(2) div`).classList.toggle("activ");
            }}
          >
            Genre/Tag<span>V</span>
          </p>
          <div>
            <button
              type="button"
              onClick={() => {
                setSortByGenre("mmorpg");
              }}
            >
              <div></div>Mmorpg
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByGenre("shooter");
              }}
            >
              <div></div>Shooter
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByGenre("strategy");
              }}
            >
              <div></div>Strategy
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByGenre("moba");
              }}
            >
              <div></div>Moba
            </button>
          </div>
        </form>
        <form className="sortBy">
          <p
            onClick={() => {
              document.querySelector(`.sortBy:nth-of-type(3) div`).classList.toggle("activ");
            }}
          >
            Sort by<span>V</span>
          </p>
          <div>
            <button
              type="button"
              onClick={() => {
                setSortByDate("relevance");
              }}
            >
              <div></div>Relevance
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByDate("popularity");
              }}
            >
              <div></div>Popularity
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByDate("release-date");
              }}
            >
              <div></div>Release Date
            </button>
            <button
              type="button"
              onClick={() => {
                setSortByDate("alphabetical");
              }}
            >
              <div></div>Alphabetical
            </button>
          </div>
        </form>
      </section>
      <div className="sortByContainer">
        {sortBy == "all" ? (
          <></>
        ) : (
          <p
            className="search-value"
            onClick={() => {
              setSortBy("all");
            }}
          >
            {sortBy}
          </p>
        )}
        {sortByGenre == "all" ? (
          <></>
        ) : (
          <p
            className="search-value"
            onClick={() => {
              setSortByGenre("all");
            }}
          >
            {sortByGenre}
          </p>
        )}
        {sortByDate == "all" ? (
          <></>
        ) : (
          <p
            className="search-value"
            onClick={() => {
              setSortByDate("all");
            }}
          >
            {sortByDate}
          </p>
        )}
      </div>
      <div className="all-games-container">
        {data.slice(0, 20).map((Data, index) => (
          <GameCards
            card={"allGames"}
            key={"Game" + index}
            thumbnail={Data.thumbnail}
            title={Data.title}
            short_description={Data.short_description}
            platform={Data.platform}
            genre={Data.genre}
            id={Data.id}
          />
        ))}
      </div>
    </>
  );
  // TODO if any checkbox is clicked -> display searched value, if not show not
};

export default AllGames;
