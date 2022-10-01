//Import Css
import "./App.css";

//Import Components
import Nav from "./Components/Nav/Nav.js";

//Import Brouser Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
