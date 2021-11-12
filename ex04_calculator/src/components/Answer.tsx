import React from "react";
import {IState as Props } from '../App'

export interface IProps {
    numbers: Props['numbers'];
    current: string;
}

const Answer: React.FC<IProps> = ({ numbers, current }) => {
  return (
    <div className="answer">
      <h1>{current}</h1>
    </div>
  );
};

export default Answer;
