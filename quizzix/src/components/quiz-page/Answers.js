import React, { useEffect, useState } from "react";

const Answers = ({
  correctAnswer,
  incorrectAnswers,
  disableAnswers,
  setDisableAnswers,
  totalScore,
  setTotalScore,
}) => {
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

  function handleAnswerClick(answer, index) {
    const buttonID = `answer-${index}`;

    if (answer === correctAnswer) {
      document.getElementById(buttonID).className = "correct";
      setTotalScore(totalScore + 1);
      console.log(totalScore + "point");
      setDisableAnswers(true);
    } else {
      document.getElementById(buttonID).className = "incorrect";
      setDisableAnswers(true);
    }
  }

  return (
    <div className="grid-container">
      {shuffledAnswers.map((answer, index) => (
        <button
          key={index}
          className={`grid-item`}
          id={`answer-${index}`}
          onClick={() => {
            handleAnswerClick(answer, index);
          }}
          disabled={disableAnswers}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
