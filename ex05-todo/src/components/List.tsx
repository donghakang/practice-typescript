import React from "react";
import { List as L, ListItem, Checkbox, ListItemText } from "@mui/material";
import { IState as IProps } from "../App";

interface Props {
  todo: IProps["todo"];
  setTodo: React.Dispatch<React.SetStateAction<IProps["todo"]>>;
}

const List: React.FC<Props> = ({ todo, setTodo }) => {
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.name);
    const newTodo = todo.map((t) =>
      t.task === e.target.name ? {task: t.task, complete: !t.complete} : t
    );
    setTodo(newTodo)
  }

  return (
    <div style={{ margin: "20px" }}>
      <L>
        {todo.map((t) => (
          <ListItem key={t.task}>
            <Checkbox
              name={t.task}
              checked={t.complete}
              onChange={handleCheck}
            />
            <ListItemText primary={t.task} />
          </ListItem>
        ))}
      </L>
    </div>
  );
};

export default List;
