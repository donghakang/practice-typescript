import React, { useState } from "react";
import { IState as IProps } from "../App";
import { TextField, Button } from "@mui/material";
// setTodo: React.Dispatch<React.SetStateAction<{
//     task: string;
//     complete: boolean;
// }[]>>

interface Props {
  todo: IProps["todo"];
  setTodo: React.Dispatch<React.SetStateAction<IProps["todo"]>>;
}

const Form: React.FC<Props> = ({ todo, setTodo }) => {
  const [text, setText] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setText(e.target.value);
  }
  function handleClick() {
    setTodo([...todo, { task: text, complete: false }]);
  }
  return (
    <div
      style={{
        margin: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        name="addTodo"
        placeholder="Add to-do"
        label="Add to-do"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        style={{ marginLeft: "20px" }}
        onClick={handleClick}
      >
        Add
      </Button>
    </div>
  );
};

export default Form;
