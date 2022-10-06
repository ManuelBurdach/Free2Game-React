import "./Home.css";
// import AllGames from "../AllGames/AllGames";
import GameCards from "../../Components/GamesCard/GameCards";
import MoreBtn from "../../Components/Btn/Read_showMore";

// IMPORT DATA
import Data from "../../Api/Data";

const Home = () => {
  return (
    <>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <div className="all-games-container">
          {Data.map((Data, index) => (
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
          {/* style={
            key === "PC-Game0"
              ? { backgroundImage: `url(${Data.thumbnail})` }
              : ""
          } */}
          {Data.map((Data, index) => (
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
        <MoreBtn value="Show more" />
      </section>
    </>
  );
};

export default Home;
