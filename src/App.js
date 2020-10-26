import React, { useEffect } from 'react';
import './App.css';

import {Link} from "react-router-dom";

import Test from "./components/test";




export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: ''
    }
    console.log('constructed')
  }
  componentDidMount() {
    this.setState({
      date: new Date().toUTCString()
    })
    console.log('mounted')
  }
  render() {
    return <div>
      <p className="App-p">{this.state.date}</p>
      <Link to="/test"> link </Link>  

      <Test></Test>
    </div>
  }
}