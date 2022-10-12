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

// Die useFetch Function übernimmt die axios GET Function und dazugehörigen Filter-Parametern als options Parameter und dann wrapen die in einem useEffect ein, mit einem leeren Array als dependency, damit das Effect abhängig vom State ist.

function useFetch(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data);
    });
  }, []);
  return { data };
}

//dann definieren wir die options Konstante die das GET als HTTP Methode und url beinhaltet und auch die Filter params und headers mit key und API host
const Home = () => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { platform: "browser", "sort-by": "release-date" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  //dann rufen wir useFetch und übergeben die options als Parameter
  const { data } = useFetch(options);
  //dann mit destructuring Syntax umbennenen data und rufen useFetch nochmals auf mit geänderten Filter-Parametern um die 4 top PC Games zu kriegen
  const { data: topPcGames } = useFetch({
    ...options,
    params: { platform: "pc", "sort-by": "popularity" },
  });
  //dann wieder nochmals mit Änderungen um die top Browser Games zu kriegen
  const { data: topBrowserGames } = useFetch({
    ...options,
    params: { platform: "browser", "sort-by": "popularity" },
  });
  console.log(data);
  console.log(topBrowserGames);
  console.log(topPcGames);
  return (
    <>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <div className="all-games-container">
          {/* wir machen ein slice um den output von data zu reduzieren und dann
          ein map um jede Data Einheit als GameCard zu rendern */}
          {data.slice(0, 4).map((Data, index) => (
            <GameCards
              card={"HomeGames"}
              key={"Game1" + index}
              thumbnail={Data.thumbnail}
              title={Data.title}
              short_description={Data.short_description}
              platform={Data.platform}
              genre={Data.genre}
              id={Data.id}
            />
          ))}
        </div>
        <MoreBtn value="Show more" />
      </section>

      <section className="homeSection">
        <h2>Top 4 Games for PC in October 2022</h2>
        <div className="home-games-container">
          {/* dann machen wir noch ein slice um nur den ersten 4 top Pc Games zu
          kriegen und dann ein map durch das vorgefilterte Array um jede Einheit
          als GameCard zu rendern */}
          {topPcGames.slice(0, 4).map((Data, index) => (
            <GameCards
              card={"allGames"}
              styling={"PC"}
              key={"PC-Game" + index}
              thumbnail={Data.thumbnail}
              // screenshots={Data.screenshots[0].image}
              title={Data.title}
              platform={Data.platform}
              genre={Data.genre}
              number={index}
              id={Data.id}
            />
          ))}
        </div>
        <MoreBtn value="Show more" />
      </section>
      <section className="homeSection">
        <h2>Top 4 Games for Browser in October 2022</h2>
        <div className="all-games-container">
          {/* dann machen wir noch ein slice um nur den ersten 4 top Browser Games zu
          kriegen und dann ein map durch das vorgefilterte Array um jede Einheit
          als GameCard zu rendern */}
          {topBrowserGames.slice(0, 4).map((Data, index) => (
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
        <MoreBtn value="Show more" />
      </section>
    </>
  );
};

export default Home;
