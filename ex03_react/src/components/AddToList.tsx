import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  // input Change events and returns as void
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!input.name || !input.age || !input.img) {
      console.log("alert!");
      return;
    } else {
      setPeople([
        ...people,
        {
          name: input.name,
          age: +(input.age),
          img: input.img,
          note: input.note,
        },
      ]);
    }
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        name="name"
        className="AddToList-input"
        value={input.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="url"
        name="img"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        placeholder="note"
        name="note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>Click to Add</button>
    </div>
  );
};

export default AddToList;
