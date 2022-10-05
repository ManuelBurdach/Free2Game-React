import { useParams } from "react-router-dom";
import MoreBtn from "../../Components/Btn/Read_showMore";

// IMPORT DATA
import Data from "../../Api/Data";

// IMPORT CSS
import "../Detail/Detail.css";

const Detail = () => {
  let params = useParams();
  let props = Data[params["*"]];
  return (
    <div className="Detail">
      {/* Header? */}
      <main>
        <h1>{props.title}</h1>
        <section className="main-container">
          <article className="article-left">
            <img src={props.thumbnail} alt=""></img>
            <h2>Platform {props.platform}</h2>
            <p className="game-cards-icon-details">{props.genre}</p>
            <MoreBtn value="PLAY NOW" />
          </article>
          <article className="article-right">
            <h2>About</h2>
            <p>{props.description}</p>
          </article>
        </section>
        <img
          src={props.screenshots[0].image}
          alt=""
          className="detail-img"
        ></img>
        <img
          src={props.screenshots[1].image}
          alt=""
          className="detail-img"
        ></img>

        <section className="main-container">
          <article className="article-left">
            <h2>Additional Information</h2>
            <p>{props.short_description}</p>
            <div className="small-container">
              <h3>Developer</h3>
              <p>{props.developer}</p>
            </div>
            <div className="small-container">
              <h3>Publisher</h3>
              <p>{props.publisher}</p>
            </div>
            <div className="small-container">
              <h3>Release Date</h3>
              <p>{props.release_date}</p>
            </div>
          </article>
          <article className="article-right">
            <h2>Minimum System Requirements {props.platform}</h2>
            <div className="small-container-both">
              <div className="small-container-left">
                <div>
                  <h3>OS</h3>
                  <p>{props.minimum_system_requirements.os}</p>
                </div>
                <div>
                  <h3>Memory</h3>
                  <p>{props.minimum_system_requirements.memory}</p>
                </div>
                <div>
                  <h3>Storage</h3>
                  <p>{props.minimum_system_requirements.storage}</p>
                </div>
              </div>
              <div className="small-container-right">
                <div>
                  <h3>Processor</h3>
                  <p>{props.minimum_system_requirements.processor}</p>
                </div>
                <div>
                  <h3>Graphics</h3>
                  <p>{props.minimum_system_requirements.graphics}</p>
                </div>
                <div>
                  <h3>Additional Notes</h3>
                  <p>{props.short_description}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

// minimum_system_requirements

export default Detail;
