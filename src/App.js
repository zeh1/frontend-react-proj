import React from 'react';
import './App.css';

import {Link, Route} from "react-router-dom";

import Test from "./components/test";

function App() {
  return (
    <div>
      <p className="App-p">home</p>
      <Link to="/test"> link </Link>  

      <Route path="/test">
          <Test></Test>
        </Route>  
    </div>
  );
}

export default App;


