import "../styles/splash/styles.css";
import Default from "./Default";
import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

function Splash() {
  

  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default text="Ignite your intellect and embrace the quizzing adventure!"></Default>

        {/* search bar */}
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="col-sm-12"
              id="input-form"
              placeholder="Enter a topic"
            />
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
