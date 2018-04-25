import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { nextGeneration } from './lib/game_of_life';

class App extends Component {
  componentDidMount() {
    console.log('next gen', nextGeneration([{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}]));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
