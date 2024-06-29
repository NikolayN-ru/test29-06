import { useEffect, useState } from "react";
import Question from "./screens/question/question";
import Welcome from "./screens/welcome";

import "./App.css";

function App() {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    let testTime = localStorage.getItem("testTime");
    if (testTime != "0") {
      setState(true);
    }
  }, []);

  const toggleState = () => {
    setState((prev) => !prev);
    let testActive = localStorage.getItem("testActive");
    if (testActive == "1") {
      setState(true);
    } else {
      localStorage.setItem("testActive", "1");
      setState(false);
    }
  };

  return <div className="App">{state ? <Question /> : <Welcome toggleState={toggleState} />}</div>;
}

export default App;
