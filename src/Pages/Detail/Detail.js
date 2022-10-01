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
    <div>
      <h1>{props.title}</h1>
      <div className="main-container">
        <div className="container-left">
          <img src={props.thumbnail}></img>
          <h3>Platform{props.platform}</h3>
          <MoreBtn value="PLAY NOW" />
        </div>
        <div className="container-right">
          <h3>About</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
