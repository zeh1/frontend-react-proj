import React from 'react';
import './test.css';

import {Route} from "react-router-dom";

function test() {
    return (
      <Route path="/test">
          <p className="test-p">test</p>
      </Route>
    );
}

export default test;
