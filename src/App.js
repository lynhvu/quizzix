import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Splash from "./components/Splash";
import Difficulty from "./components/Difficulty";
import NumberOfQuestion from "./components/NumberOfQuestion";
import Quiz from "./components/quiz-page/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quizzix" element={<Splash />} />
        <Route path="/difficulty" element={<Difficulty />} />
        <Route path="/numquestion" element={<NumberOfQuestion />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
