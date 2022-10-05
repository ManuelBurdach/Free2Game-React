import "./Home.css";
import AllGames from "../AllGames/AllGames";
import MoreBtn from "../../Components/Btn/Read_showMore";

const Home = () => {
  return (
    <>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <MoreBtn value="Show more" />
      </section>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <MoreBtn value="Show more" />
      </section>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <MoreBtn value="Show more" />
      </section>
    </>
  );
};

export default Home;
