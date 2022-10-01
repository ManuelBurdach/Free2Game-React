import "./RecentlyAdded.css";
import AllGames from "../AllGames/AllGames";
import MoreBtn from "../../Components/Btn/Read_showMore";

const RecentlyAdded = () => {
  return (
    <>
      <section className="homeSection">
        <h2>Recently Added</h2>
        <AllGames />
        <MoreBtn value="Show more" />
      </section>
    </>
  );
};

export default RecentlyAdded;
