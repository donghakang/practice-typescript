import React from "react";

interface IProps {
  answer: string;
}

const Answer: React.FC<IProps> = ({ answer }) => {
  return (
    <div className="answer">
      <h1>{answer}</h1>
    </div>
  );
};

export default Answer;
