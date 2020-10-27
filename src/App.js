import React, { useEffect } from 'react';
import './App.css';

import './components/test'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 'original state'
    }
    console.log('constructed')
  }
  componentDidMount() {
    this.setState({
      date: 'original state'
    })
    console.log('mounted')
  }
  componentDidUpdate() {
    console.log('updated')
  }
  render() {
    return (
      <React.Fragment>
        <p className="App-p">{this.state.date}</p>
        <Test></Test>
      </React.Fragment>
    )
  }
}