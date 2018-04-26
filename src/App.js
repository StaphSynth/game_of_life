import React, { Component } from 'react';
import './App.css';
import nextGeneration from './lib/game_of_life';
import Board from './components/board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 7, y: 4}, {x: 6, y: 3}],
      running: false,
      intervalId: null
    };
  }

  nextBoard() {
    this.setState({gameBoard: nextGeneration(this.state.gameBoard)})
  }

  handleClick() {
    let running = this.state.running, intervalId;

    if(running) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null, running: !running })
    } else {
      intervalId = setInterval(this.nextBoard.bind(this), 300);
      this.setState({ intervalId, running: !running });
    }
  }

  render() {
    return (
      <div className="game-of-life">
        <Board
          size="20"
          board={ this.state.gameBoard }
        />
        <button onClick={ () => this.handleClick() }>
          { this.state.running ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}



export default App;
