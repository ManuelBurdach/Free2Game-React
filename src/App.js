//Import Css
import "./App.css";

//Import Components
import Nav from "./Components/Nav/Nav.js";
import AllGames from "./Pages/AllGames/AllGames";

//Import BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
