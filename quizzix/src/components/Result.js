import "../styles/quiz/styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { getInputFromStorage } from "./StoreInputs";

function Result() {
  const totalScore = getInputFromStorage("score");
  const totalQuestion = getInputFromStorage("numberOfQuestion");

  return (
    <div className="container bg">
      <div className="content mt-5">
        <div className="quiz-bg" id="">
          <div className="custom-container">
            <h2 className="white-text my-4">
              Yayyy! You have completed the quiz.
            </h2>
            <h5 className="white-text">
              You got {totalScore} point(s) out of {totalQuestion}.
            </h5>
          </div>
        </div>

        {/* next question button */}
        <div className="d-grid gap-2 d-flex justify-content-center">
          <Link to="/">
            <button type="submit" className="lv-btn mt-2" id="next-btn">
              <span id="btn-text">Restart</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;
