import Default from "./Default";
import { useEffect } from "react";
import { addInputToStorage } from "./StoreInputs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function NumberOfQuestion() {
  useEffect(() => {
    const numElement = document.getElementById("input-form");
    const submitElement = document.getElementById("submit-btn");
    

    // function that would add the input into the storage
    const handleClick = (e) => {
      var intInput = parseInt(numElement.value);
      if (
        numElement.value === "" ||
        intInput < 5 ||
        intInput > 25 ||
        isNaN(intInput)
      ) {
        e.preventDefault();
        numElement.classList.add("is-invalid");
      }
      console.log(numElement.value);
      addInputToStorage("numberOfQuestion", numElement.value);
    };

    numElement.addEventListener("change", function () {
      var intInput = parseInt(numElement.value);
      if (
        numElement.value !== "" &&
        !isNaN(intInput) &&
        intInput >= 5 &&
        intInput <= 25
      ) {
        numElement.classList.remove("is-invalid");
      }
    });
    
    // when clicked, it will trigger the handleClick function
    submitElement.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      submitElement.removeEventListener("click", handleClick);
      numElement.removeEventListener("change", handleClick);
    };
  }, []);

  return (
    <div className="container bg">
      <div className="text-center splash-content">
        <Default text="Choose number of questions (betwwen 5 and 25)"></Default>

        {/* input bar */}
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="col-sm-12"
              id="input-form"
              placeholder="Enter a number"
              required="true"
            />
            <div className="invalid-feedback">
              Please enter a number between 5 and 25.
            </div>
          </div>
        </div>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center">
          <Link to="/quiz">
            <button type="submit" class="next-btn" id="submit-btn">
              <span>Start</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NumberOfQuestion;
