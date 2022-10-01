//Import Css
import "./App.css";

//Import Api
import Data from "./Api/Data";

//Import Components
import Nav from "./Components/Nav/Nav.js";
import Header from "./Components/Header/Header.js";

//Import Pages
import AllGames from "./Pages/AllGames/AllGames";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";

//Import BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllGames" element={<AllGames />} />
            <Route path="/Detail//*" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
