import React from 'react';
import './test.css';

import {Link, Redirect} from "react-router-dom";

export default function Test() {
    return (
        <div>
            <Link to="/">redirect</Link>
            <p>test</p>
        </div>

    );
}