import "../../styles/quiz/styles.css";
import { getInputFromStorage } from "../StoreInputs";
import React, { useEffect, useState } from "react";
import Answers from "./Answers";

function Quiz() {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // get data from local storage
  let topic = getInputFromStorage("categoryID");
  let level = getInputFromStorage("level");
  let numQuestion = getInputFromStorage("numberOfQuestion");

  // initialize
  let curQuestionIndex = 0;

  useEffect(() => {
    fetchQuestionFromAPI();
  }, []);

  async function fetchQuestionFromAPI() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple"
      );
      const data = await response.json();

      // access the items in the api object (dictionary of questions)
      const questions = data.results;

      const getQuestionNum = document.getElementById("question-num");
      const getQuestionText = document.getElementById("question-text");

      if (curQuestionIndex < questions.length) {

        // question number
        getQuestionNum.textContent = `Question ${curQuestionIndex + 1} of ${
          questions.length}`;

        // display question text
        const curQuestion = questions[curQuestionIndex];
        getQuestionText.textContent = `${curQuestion.question}`;

        // print out current question
        console.log(curQuestion);

        // deadling with answers
        setCorrectAnswer(curQuestion.correct_answer);
        setIncorrectAnswers(curQuestion.incorrect_answers);

        

          
        curQuestionIndex++;
      } else {
        console.log("No more questions available");
        // Handle the case when there are no more questions to display
      }
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  }

  return (
    <div className="container bg">
      <div className="custom-container" id="quiz-bg">
        <div className="row">
          {/* question */}
          <div id="question-field">
            <h1 id="question-num"></h1>
            <p id="question-text"></p>
          </div>
        </div>

        {/* answer options */}

        <div className="row" id="answer-display">
        <Answers correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers}/>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
