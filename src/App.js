import "./App.css";
import Home from "./components/home";
import SecondPage from "./components/secondPage";
// bootstrap--
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "./custome.scss";
import Btn from "./components/btn";
import { useState } from "react";
const btns = [
  {
    title: "Add",
    variant: "primary",
  },
  {
    title: "min",
    variant: "secondary",
  },
];

function App() {
  // return (
  //   <div className="blogWeb">
  //     <Home />
  //     <SecondPage />
  //   </div>
  // );
  const [count, setCount] = useState(0);
  const handleClick = (title) => {
    // alert("Hello Button ");
    if (title === "Add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      {btns.map((btn) => (
        <Btn
          title={btn.title}
          variant={btn.variant}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
