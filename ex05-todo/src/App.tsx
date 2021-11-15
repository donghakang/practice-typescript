import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export interface IState {
  todo: {
    task: string;
    complete: boolean;
  }[];
}

function App() {
  const [todo, setTodo] = useState<IState["todo"]>([]);

  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
