import "../styles/splash/styles.css";
import Default from "./Default";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { addInputToStorage } from "./StoreInputs";

function Splash() {

    const [selectTopic, setSelectTopic] = useState("");
    // JS code to get the list of topic from the API
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
            //console.log(optionElement);

            // Set the ID as a data attribute on the option element
            optionElement.dataset.id = option.id;

            // add option to the list
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

      // Get a reference to the <select> element
      const selectTopicElement = document.getElementById("topic-selection");

      // Add an event listener to the <select> element
      selectTopicElement.addEventListener("change", function () {
        const selectedOption = this.options[this.selectedIndex];
        const selectedName = selectedOption.textContent;
        const selectedId = selectedOption.dataset.id;

        console.log("Name:", selectedName);
        console.log("ID:", selectedId);

        setSelectTopic(selectedId);
        addInputToStorage("categoryID", selectedId);
      });
    }, []);

  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default text="Ignite your intellect and embrace the quizzing adventure!"></Default>

        {/* drop down menu */}
        <div>
          <div className="mb-3">
            <div className="col-md">
              <select id="topic-selection" className="form-select" required="">
                <option value="" id="dark-text hide" disabled selected>
                  Choose a topic
                </option>
                console.log();
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
