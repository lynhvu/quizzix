import "../styles/quiz/styles.css";

function Quiz() {
  return (
    <div className="container bg">
      <div className="custom-container" id="quiz-bg">
        <div className="row">
          {/* question */}
          <div id="question-field">
            <h1>Question 1 </h1>
            <p id="question-text">Which company did Valve cooperate with in the creation of the Vive?</p>
          </div>
        </div>

        {/* answer options */}

        <div className="row">
          <div className="grid-container">
            <div className="grid-item">A</div>
            <div className="grid-item">B</div>
            <div className="grid-item">C</div>
            <div className="grid-item">D</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
