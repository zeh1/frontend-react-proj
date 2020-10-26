import React from 'react';
import './test.css';

import {Route, Link, Switch, Redirect} from "react-router-dom";

export default function Test(to) {
    return (
        <div>
            <Switch>
            <Route path="/test">
                <p>TEST</p>
                <Link to="/test2">{new Date().toUTCString()}</Link>
                <Link to="home"><pre>home</pre></Link>
            </Route>

            <Route path="/test2">
                <Redirect to="/"></Redirect>
            </Route>
            </Switch>
        </div>
    );
}