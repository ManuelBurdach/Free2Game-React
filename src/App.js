//Import Css
import "./App.css";

import Data from "./Api/Data";

//Import Components
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js"
import AllGames from "./Pages/AllGames/AllGames";


//Import BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Nav />
        <AllGames />
        <Routes>
          <Route path="/" element="" />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
