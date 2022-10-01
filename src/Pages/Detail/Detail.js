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
        <div className="main-container">
          <div className="container-left">
            <img src={props.thumbnail} alt=""></img>
            <h2>Platform{props.platform}</h2>
            <div className="game-cards-icon-details">
              <p>{props.genre}</p>
            </div>

            <MoreBtn value="PLAY NOW" />
          </div>
          <div className="container-right">
            <h2>About</h2>
            <p>{props.description}</p>
          </div>
        </div>
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

        <div className="main-container">
          <div className="container-left">
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
          </div>
          <div className="container-right">
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
          </div>
        </div>
      </main>
    </div>
  );
};

// minimum_system_requirements

export default Detail;
