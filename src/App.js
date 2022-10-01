//Import Css
import "./App.css";
import Nav from "./Components/Nav/Nav.js";

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
