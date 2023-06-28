import React, { useEffect, useState } from "react";

const Answers = ({ correctAnswer, incorrectAnswers, onAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  // Concatenate the correct and incorrect answers into a single array
  const answers = [correctAnswer, ...incorrectAnswers];

  // Shuffle the answers array
  const shuffled = shuffleArray(answers);

  useEffect(() => {
    setShuffledAnswers(shuffled);
  }, [correctAnswer, incorrectAnswers]);

  /** funtion to put answers into random order */
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleAnswerClick(answer) {
    const getAnswer = document.getElementById("answers");
    if (answer === correctAnswer) {
        
    }
  }

  return (
    <div className="grid-container">
      {shuffledAnswers.map((answer, index) => (
        <button key={index} className="grid-item" id="answers">
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
