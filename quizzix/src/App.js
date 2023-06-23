import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Splash from './components/Splash'
import Difficulty from './components/Difficulty';
import NumberOfQuestion from './components/NumberOfQuestion';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Splash/>}/>
      <Route path='/difficulty' element={<Difficulty/>}/>
      <Route path='/numquestion' element={<NumberOfQuestion/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
