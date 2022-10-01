import GameCards from "../../Components/GamesCard/GameCards";
import Data from "../../Api/Data";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="recentlyadded">
        {Data.map((Data, index) => (
          <GameCards
            key={"gamesCard" + index}
            img={Data.thumbnail}
            title={Data.title}
            short_description={Data.short_description}
            platform={Data.platform}
            CarYear={Data.CarYear}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
