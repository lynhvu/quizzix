import React, { useEffect, useState } from "react";

const Answers = ({ correctAnswer, incorrectAnswers }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    // Concatenate the correct and incorrect answers into a single array
    const answers = [correctAnswer, ...incorrectAnswers];

    // Shuffle the answers array
    const shuffled = shuffleArray(answers);

    setShuffledAnswers(shuffled);
  }, [correctAnswer, incorrectAnswers]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="grid-container">
      {shuffledAnswers.map((answer, index) => (
        <button key={index} className="grid-item">
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
