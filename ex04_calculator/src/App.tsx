import React, { useEffect, useState } from "react";
import "./App.css";
import Answer from "./components/Answer";
import Buttons from "./components/Buttons";

export interface IState {
  eq: string;
  answer: string;
}

function App() {
  const [eq, setEq] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  return (
    <div className="App">
      <div className="calculator">
        <Answer answer={answer} />
        <Buttons answer={answer} setAnswer={setAnswer} eq={eq} setEq={setEq} />
      </div>
    </div>
  );
}

export default App;
