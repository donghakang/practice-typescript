import React, { useEffect, useState } from "react";
import "./App.css";
import Answer from "./components/Answer";
import Buttons from "./components/Buttons";

export interface IState {
  numbers: (number | string)[];
}

function App() {
  const [numbers, setNumbers] = useState<IState["numbers"]>([]);
  const [current, setCurrent] = useState<string>("0");

  useEffect(() => {
    console.log(numbers);
  }, [numbers]);

  return (
    <div className="App">
      <div className="calculator">
        <Answer numbers={numbers} current={current} />
        <Buttons
          current={current}
          setCurrent={setCurrent}
          numbers={numbers}
          setNumbers={setNumbers}
        />
      </div>
    </div>
  );
}

export default App;
