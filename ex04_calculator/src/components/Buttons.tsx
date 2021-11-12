import React from "react";
import { IState as Props } from "../App";

interface IProps {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  numbers: Props["numbers"];
  setNumbers: React.Dispatch<React.SetStateAction<Props["numbers"]>>;
}

const Buttons: React.FC<IProps> = ({
  current,
  setCurrent,
  numbers,
  setNumbers,
}) => {
  function handleClickNumber(e: React.MouseEvent<HTMLButtonElement>): void {
    const { name } = e.target as HTMLButtonElement;
    if (current.includes(".")) {
      setCurrent(current + name);
    } else {
      setCurrent((+(current + name)).toString());
    }
  }

  function handleClickPoint(): void {
    if (current.includes(".")) {
      return;
    } else {
      setCurrent(current + ".");
    }
  }

  function handleClickOperator(e: React.MouseEvent<HTMLButtonElement>): void {
    const { name } = e.target as HTMLButtonElement;

    if (name === "AC") {
    }
    if (name === "+/-") {
    }
    if (name === "%") {
    }
    if (name === "/") {
      setNumbers([...numbers, current, '/' ]);
    }
    if (name === "*") {
      setNumbers([...numbers, current, '*' ]);
    }
    if (name === "+") {
      setNumbers([...numbers, current, '+' ]);
    }
    if (name === "-") {
      setNumbers([...numbers, current, '-' ]);
    }
    if (name === "=") {
    }
  }

  return (
    <>
      <div className="button-row">
        <button name="AC" onClick={handleClickOperator} className="button-dark">
          AC
        </button>
        <button
          name="+/-"
          onClick={handleClickOperator}
          className="button-dark"
        >
          +/-
        </button>
        <button name="%" onClick={handleClickOperator} className="button-dark">
          %
        </button>
        <button
          name="/"
          onClick={handleClickOperator}
          className="button-orange"
        >
          /
        </button>
      </div>
      <div className="button-row">
        <button name="7" onClick={handleClickNumber}>
          7
        </button>
        <button name="8" onClick={handleClickNumber}>
          8
        </button>
        <button name="9" onClick={handleClickNumber}>
          9
        </button>
        <button
          name="*"
          onClick={handleClickOperator}
          className="button-orange"
        >
          *
        </button>
      </div>
      <div className="button-row">
        <button name="4" onClick={handleClickNumber}>
          4
        </button>
        <button name="5" onClick={handleClickNumber}>
          5
        </button>
        <button name="6" onClick={handleClickNumber}>
          6
        </button>
        <button
          name="-"
          onClick={handleClickOperator}
          className="button-orange"
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button name="1" onClick={handleClickNumber}>
          1
        </button>
        <button name="2" onClick={handleClickNumber}>
          2
        </button>
        <button name="3" onClick={handleClickNumber}>
          3
        </button>
        <button
          name="+"
          onClick={handleClickOperator}
          className="button-orange"
        >
          +
        </button>
      </div>
      <div className="button-row-last">
        <button name="0" onClick={handleClickNumber} className="zero">
          0
        </button>
        <button name="." onClick={handleClickPoint}>
          .
        </button>
        <button
          name="="
          onClick={handleClickOperator}
          className="button-orange"
        >
          =
        </button>
      </div>
    </>
  );
};

export default Buttons;
