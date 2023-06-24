import "../styles/splash/styles.css";
import Default from "./Default";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Splash() {

  useEffect(() => {
    const datalist = document.getElementById("topic-selection");
    const input = document.getElementById("browser-input");

    // Function to fetch data from API
    async function fetchOptionsFromAPI() {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();

        const categories = data.trivia_categories;

        // Create new options based on API data
        categories.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.id = "dark-text";
          optionElement.textContent = option.name;
          console.log(optionElement);
          
          datalist.appendChild(optionElement);
        });
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    }
    fetchOptionsFromAPI();
    // Example: Fetch options from API when input value changes
    if (input) {
      input.addEventListener("input", fetchOptionsFromAPI);
    }
  }, []);

  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default text="Ignite your intellect and embrace the quizzing adventure!"></Default>

        {/* search bar */}
        <div>
          <div className="mb-3">
            {/* <input
              type="text"
              className="col-sm-12"
              id="input-form"
              placeholder="Enter a topic"
            /> */}

            <div className="col-md-4">
              <select id="topic-selection" className="form-select" required="">
                <option value="" id="dark-text hide" disabled selected>Choose a topic</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid topic.
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="d-grid gap-2 d-flex justify-content-center">
          <div className="d-grid gap-2 d-flex justify-content-center">
            <Link to="/difficulty">
              <button type="submit" className="next-btn" id="next">
                <span>Next</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
