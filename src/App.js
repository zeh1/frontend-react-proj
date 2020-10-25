import React from 'react';
import './App.css';

import {Link} from "react-router-dom";

import test from "./components/test";

function App() {
  return (
    <div>
      <p className="App-p">home</p>
      <Link to="/test"> link </Link>    
      <test/>
    </div>
  );
}

export default App;


