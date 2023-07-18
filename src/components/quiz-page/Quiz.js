import "../../styles/quiz/styles.css";
import { addInputToStorage, getInputFromStorage } from "../StoreInputs";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Answers from "./Answers";

function Quiz() {
  const [disableAnswers, setDisableAnswers] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [curQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  // get data from local storage
  let topic = getInputFromStorage("categoryID");
  let level = getInputFromStorage("level");
  let numQuestion = getInputFromStorage("numberOfQuestion");

  useEffect(() => {
    fetchQuestionFromAPI();
  }, [curQuestionIndex]);

  const renderBtn = () => {
    if (curQuestionIndex < numQuestion) {
      return (
        <button
          type="submit"
          className="next-btn mt-2"
          id="next-btn"
          onClick={handleNextBtnClick}
        >
          <span id="btn-text">Next question</span>
        </button>
      );
    } else {
      console.log("quiz total = " + totalScore);
      addInputToStorage("score", totalScore);
      return (
        <Link to="/result">
          <button
            type="submit"
            className="lv-btn mt-2"
            id="next-btn"
            onClick={handleNextBtnClick}
          >
            <span id="btn-text">Complete quiz</span>
          </button>
        </Link>
      );
    }
  };

  async function fetchQuestionFromAPI() {
    try {
      resetAnswerBtn();
      console.log(numQuestion);
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${numQuestion}&category=${topic}&difficulty=${level}&type=multiple`
      );
      const data = await response.json();

      // access the items in the api object (dictionary of questions)
      const questions = data.results;

      const getQuestionNum = document.getElementById("question-num");
      const getQuestionText = document.getElementById("question-text");
      if (curQuestionIndex <= questions.length) {
        // question number
        getQuestionNum.textContent = `Question ${curQuestionIndex} of ${questions.length}`;

        // display question text
        const curQuestion = questions[curQuestionIndex - 1];
        getQuestionText.textContent = `${curQuestion.question}`;

        // deadling with answers
        setCorrectAnswer(curQuestion.correct_answer);
        setIncorrectAnswers(curQuestion.incorrect_answers);
      } else {
        console.log("No more questions available");
        // Handle the case when there are no more questions to display
      }
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  }

  const handleNextBtnClick = () => {
    if (curQuestionIndex - 1 < numQuestion - 1) {
      console.log("cur = " + curQuestionIndex + " total = " + numQuestion);
      setCurrentQuestionIndex(curQuestionIndex + 1);
    } else {
      console.log("submit clicked");
    }
  };


  const resetAnswerBtn = () => {
    // Get the access to the buttons' attributes
    const parentAttribute = document.querySelector(".grid-container");
    const buttons = parentAttribute.querySelectorAll("button");

    // Loop through the buttons and access their classes
    buttons.forEach((button) => {
      const btnClasses = button.classList;
      if (btnClasses.contains("incorrect")) {
        btnClasses.remove("incorrect");
      } else if (btnClasses.contains("correct")) {
        btnClasses.remove("correct");
      }
      btnClasses.add("grid-item");
    });
    setDisableAnswers(false);
  };

  return (
    <div className="container bg">
      <div className="content mt-5">
        <div className="quiz-bg" id="">
          <div className="custom-container">
            {/* question */}
            <div id="question-field">
              <h1 id="question-num"></h1>
              <p className="fs-2 fs-sm-5" id="question-text"></p>
            </div>

            {/* answer options */}
            <div className="" id="answer-display">
              <div className="col-12">
                <div className="answer-btn">
                  {/* display the answer */}
                  <Answers
                    correctAnswer={correctAnswer}
                    incorrectAnswers={incorrectAnswers}
                    disableAnswers={disableAnswers}
                    setDisableAnswers={setDisableAnswers}
                    totalScore={totalScore}
                    setTotalScore={setTotalScore}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next question button */}
        <div className="d-grid gap-2 d-flex justify-content-center">
          {renderBtn()}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
