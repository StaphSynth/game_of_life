import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { currentGameState } from './controller';

class App extends React.Component {
  render() {
    const { running, gameBoard, boardSize, mouseDown } = currentGameState();
    return (
      <Game
        running={ running }
        gameBoard={ gameBoard }
        boardSize={ boardSize }
        mouseDown={ mouseDown }
      />
    );
  }
}

export const root = ReactDOM.render(<App />, document.getElementById('root'));
