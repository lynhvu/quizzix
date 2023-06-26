import Default from "./Default";
import { useEffect } from "react";
import { addInputToStorage } from "./StoreInputs";

function NumberOfQuestion() {
  useEffect(() => {
    const numElement = document.getElementById("input-form");
    const submitElement = document.getElementById("submit-btn");

    // function that would add the input into the storage
    const handleClick = () => {
      console.log(numElement.value);
      addInputToStorage("numberOfQuestion", numElement.value);
    };

    // when clicked, it will trigger the handleClick function
    submitElement.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      submitElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default text="Choose number of questions (betwwen 5 and 50)"></Default>

        {/* input bar */}
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="col-sm-12"
              id="input-form"
              placeholder="Enter a number"
            />
          </div>
        </div>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center">
          <button type="submit" class="next-btn" id="submit-btn">
            <span>Start</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberOfQuestion;
