import "./Home.css";
// import AllGames from "../AllGames/AllGames";
import GameCards from "../../Components/GamesCard/GameCards";
import MoreBtn from "../../Components/Btn/Read_showMore";

// IMPORT DATA
// import Data from "../../Api/Data";

// IMPORT CSS
import "../../Components/GamesCard/GameCards.css";

import { useState, useEffect } from "react";
import axios from "axios";

// Die useFetch function übernimmt die fetch function und dazugehörigen filtrparametern als options parameter und encapsuliert die in einem useEffect mit einem leeren Array als dependency

function useFetch(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data);
    });
  }, []);
  return { data };
}

//innerhalb von Home definieren wir 2 variabeln die wir zum filtrieren die Ergebnisse nutzen
//dann definieren wir  die options constante die das GET und url beinhaltet und auch die filter params und headers mit key und API host
const Home = () => {
  let shorty = "release-date";
  let platty = "browser";
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { platform: platty, category: "mmorpg", "sort-by": shorty },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  //dann rufen wir useFetch auch und übergeben die op
  const { data } = useFetch(options);
  console.log({ data });
  return (
    <>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <div className="all-games-container">
          {data
            .filter((Data, index) => index < 4)
            .map((Data, index) => (
              <GameCards
                card={"HomeGames"}
                key={"Game" + index}
                thumbnail={Data.thumbnail}
                title={Data.title}
                short_description={Data.short_description}
                platform={Data.platform}
                genre={Data.genre}
              />
            ))}
        </div>
        <MoreBtn value="Show more" />
      </section>
      <section className="homeSection">
        <h2>Top 4 Games for PC in October 2022</h2>
        <div className="home-games-container">
          {(shorty = "popularity")}
          {/* style={
            key === "PC-Game0"
              ? { backgroundImage: `url(${Data.thumbnail})` }
              : ""
          } */}
          {data
            .filter((Data, index) => index < 4)
            .map((Data, index) => (
              <GameCards
                card={"allGames"}
                styling={"PC"}
                key={"PC-Game" + index}
                thumbnail={Data.thumbnail}
                title={Data.title}
                platform={Data.platform}
                genre={Data.genre}
              />
            ))}
        </div>
        <MoreBtn value="Show more" />
      </section>
      <section className="homeSection">
        <h2>Top 4 Games for Browser in October 2022</h2>
        <div className="all-games-container">
          {data
            .filter((Data, index) => index < 4)
            .map((Data, index) => (
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
        <MoreBtn value="Show more" />
      </section>
    </>
  );
};

export default Home;
