import React, { Component } from 'react';
import './App.css';
import nextGeneration from './lib/game_of_life';
import Board from './components/board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]
    };
  }

  nextBoard() {
    this.setState({gameBoard: nextGeneration(this.state.gameBoard)})
  }

  componentDidMount() {
    sleep(500).then(() => {
      this.nextBoard();
    });
  }

  componentDidUpdate() {
    sleep(500).then(() => {
      this.nextBoard();
    });
  }

  render() {
    return (
      <div className="game-of-life">
        <Board
          size="10"
          board={ this.state.gameBoard }
        />
      </div>
    );
  }
}

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

export default App;
