import React, { useEffect } from 'react';
import './App.css';

import AuthChecker from './components/AuthChecker'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AuthChecker></AuthChecker>
    )
  }
}