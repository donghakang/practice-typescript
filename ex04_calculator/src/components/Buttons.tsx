import React from "react";
import { IState as Props } from "../App";

interface IProps {
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<IProps["answer"]>>;
  eq: string;
  setEq: React.Dispatch<React.SetStateAction<IProps["eq"]>>;
}

const Buttons: React.FC<IProps> = ({ answer, setAnswer, eq, setEq }) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const { name } = e.target as HTMLButtonElement;

    if (name === "AC") {
      setAnswer("");
      setEq("");
    } 
    else if (name === '=') {
      setAnswer(eval(eq));
    }
     else {
      console.log(eq, name);
      setEq(eq + name);
      setAnswer(eq + name);
    }
  }

  return (
    <>
      <div className="button-row">
        <button name="AC" onClick={handleClick} className="button-dark">
          AC
        </button>
        <button name="+/-" onClick={handleClick} className="button-dark">
          +/-
        </button>
        <button name="%" onClick={handleClick} className="button-dark">
          %
        </button>
        <button name="/" onClick={handleClick} className="button-orange">
          /
        </button>
      </div>
      <div className="button-row">
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick} className="button-orange">
          *
        </button>
      </div>
      <div className="button-row">
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick} className="button-orange">
          -
        </button>
      </div>
      <div className="button-row">
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick} className="button-orange">
          +
        </button>
      </div>
      <div className="button-row-last">
        <button name="0" onClick={handleClick} className="zero">
          0
        </button>
        <button name=".">.</button>
        <button name="=" onClick={handleClick} className="button-orange">
          =
        </button>
      </div>
    </>
  );
};

export default Buttons;
