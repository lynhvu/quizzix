import Default from "./Default";
import "../styles/splash/styles.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { addInputToStorage } from "./StoreInputs";

function Difficulty() {
  // initialize the useState
  const [selectedLevel, setSelectedLevel] = useState("");

  useEffect(() => {
    // get element by ID
    const easyBtn = document.getElementById("easy-btn");
    const medBtn = document.getElementById("med-btn");
    const hardBtn = document.getElementById("hard-btn");

    // function to handle the click
    const handleEasyButtonClick = () => {
      setSelectedLevel("easy");
      addInputToStorage("level", "easy");
    };
    const handleMedButtonClick = () => {
      setSelectedLevel("medium");
      addInputToStorage("level", "medium");
    };
    const handleHardButtonClick = () => {
      setSelectedLevel("hard");
      addInputToStorage("level", "hard");
    };

    // event listeners to trigger actions
    easyBtn.addEventListener("click", function () {
      addInputToStorage("level", "easy");
    });
    medBtn.addEventListener("click", function () {
      addInputToStorage("level", "medium");
    });
    hardBtn.addEventListener("click", function () {
      addInputToStorage("level", "hard");
    });

    // // Clean up the event listener when the component unmounts
    return () => {
      easyBtn.removeEventListener("click", handleEasyButtonClick);
      medBtn.removeEventListener("click", handleMedButtonClick);
      hardBtn.removeEventListener("click", handleHardButtonClick);
    };
  }, []);

  return (
    <div className="container bg">
      <div className="text-center splash-content">
        <Default text="Choose a difficult level"></Default>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center" id="dif">
          <Link to="/numquestion">
            <button id="easy-btn" class="lv-btn">
              <span>easy</span>
            </button>
            <button id="med-btn" class="lv-btn">
              <span>medium</span>
            </button>
            <button id="hard-btn" class="lv-btn">
              <span>hard</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
