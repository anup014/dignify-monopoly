import React from "react";

const QuizQuestion = ({ question, options, onAnswer }) => {
  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          style={{ display: "block", margin: "5px" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizQuestion;
