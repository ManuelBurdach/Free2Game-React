import { useParams } from "react-router-dom";
import MoreBtn from "../../Components/Btn/Read_showMore";

// IMPORT DATA
// import Data from "../../Api/Data";

// IMPORT CSS
import "../Detail/Detail.css";

// IMPORT useState, useEffect
import { useState, useEffect } from "react";

const Detail = () => {
  let params = useParams();
  // let props = Data[params["*"]];

  const [game, setGameId] = useState(null);
  //
  useEffect(() => {
    const options = {
      method: "GET",
      // process.env.REACT_APP_API_KEY
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params["*"]}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setGameId(response))
      .catch((err) => console.error(err));
  }, []);

  return game != null ? (
    <div className="Detail">
      <main>
        <h1>{game.title}</h1>
        <section className="main-container">
          <article className="article-left">
            <img src={game.thumbnail} alt=""></img>
            <h2>Platform {game.platform}</h2>
            <div>
              <p className="game-cards-icon-details">{game.genre}</p>
            </div>
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <MoreBtn value="PLAY NOW" />
            </a>
          </article>
          <article className="article-right">
            <h2>About</h2>
            <p className="about-p">{game.description}</p>
          </article>
        </section>
        <img
          src={game.screenshots[0].image}
          alt=""
          className="detail-img"
        ></img>
        <img
          src={game.screenshots[1].image}
          alt=""
          className="detail-img"
        ></img>

        <section className="main-container">
          <article className="article-left">
            <h2>Additional Information</h2>
            <p>{game.short_description}</p>
            <div className="small-container">
              <h3>Developer</h3>
              <p>{game.developer}</p>
            </div>
            <div className="small-container">
              <h3>Publisher</h3>
              <p>{game.publisher}</p>
            </div>
            <div className="small-container">
              <h3>Release Date</h3>
              <p>{game.release_date}</p>
            </div>
          </article>
          <article className="article-right">
            <h2>Minimum System Requirements {game.platform}</h2>
            <div className="small-container-both">
              <div className="small-container-left">
                <div>
                  <h3>OS</h3>
                  <p>{game.minimum_system_requirements.os}</p>
                </div>
                <div>
                  <h3>Memory</h3>
                  <p>{game.minimum_system_requirements.memory}</p>
                </div>
                <div>
                  <h3>Storage</h3>
                  <p>{game.minimum_system_requirements.storage}</p>
                </div>
              </div>
              <div className="small-container-right">
                <div>
                  <h3>Processor</h3>
                  <p>{game.minimum_system_requirements.processor}</p>
                </div>
                <div>
                  <h3>Graphics</h3>
                  <p>{game.minimum_system_requirements.graphics}</p>
                </div>
                <div>
                  <h3>Additional Notes</h3>
                  <p>{game.short_description}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  ) : (
    <></>
  );
};

export default Detail;
