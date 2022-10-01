import GamesCards from "../../Components/GamesCard/GameCards";
import Data from "../../Api/Data";

const Home = () => {
  return Data.map((Data, index) => (
    <GamesCards
      key={"gamesCard" + index}
      img={Data.thumbnail}
      title={Data.title}
      short_description={Data.short_description}
      platform={Data.platform}
      CarYear={Data.CarYear}
    />
  ));
};

export default Home;
