import React from "react";
import "../App.css";

interface IProps {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

// React.FC ==> Functional Component
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.img} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} yrs old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
