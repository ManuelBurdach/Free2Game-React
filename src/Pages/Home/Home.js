import Data from "../../Api/Data";

const Home = () => {
  return Data.map((Data, index) => (
    <GamesCard
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
