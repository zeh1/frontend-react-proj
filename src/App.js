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
    
    this.setState((prev, props)=>{
      console.log(`prev state: ${prev.input}`)
      console.log(`props: ${Object.keys(props).length === 0 && props.constructor === Object}`)
      return {
        input: e.target.value
      }
    })
    console.log(`after input ${this.state.date}`)
  }
  render() {
    return (
      <React.Fragment>
        <p className="App-p">{this.state.date}</p>
        <Test put={this.state.input}></Test>
        <input type="text" onInput={this.handleinput}></input>
        <p>input is {this.state.input}</p>
      </React.Fragment>
    )
  }
}