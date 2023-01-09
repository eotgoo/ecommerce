import "./App.css";
import Home from "./components/home";
import SecondPage from "./components/secondPage";
// bootstrap--
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "./custome.scss";

function App() {
  return (
    <div className="blogWeb">
      <Home />
      <SecondPage />
      <Button>OTGOO</Button>
    </div>
  );
}

export default App;
