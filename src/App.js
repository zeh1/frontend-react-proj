import React, { useEffect } from 'react';
import './App.css';

import Test from './components/test'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 'original state',
      input: 'original input'
    }
    console.log('constructed')
  }
  componentDidMount() {
    this.setState({
      date: new Date().toLocaleString()
    })
    console.log('mounted')
  }
  componentDidUpdate() {
    console.log('updated')
  }
  handleinput = (e) => {
    console.log('input event')
    this.setState({
      input: e.target.value
    })
    console.log(`${this.state.date}`)
  }
  render() {
    return (
      <React.Fragment>
        <p className="App-p">{this.state.date}</p>
        <Test></Test>
        <input type="text" onInput={this.handleinput}></input>
        <p>input is {this.state.input}</p>
      </React.Fragment>
    )
  }
}