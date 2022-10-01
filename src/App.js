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

//Import BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
<<<<<<< HEAD
        <Routes>
          <Route path="/" element="" />
        </Routes>
=======
        <main>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/AllGames" element={<AllGames />} />
          </Routes>
        </main>
>>>>>>> 66b547c0250b0912785d50a768dbde1819da3b22
      </div>
    </BrowserRouter>
  );
}

export default App;
