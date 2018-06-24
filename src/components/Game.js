import React from 'react';
import '../App.css';
import Board from './Board';
import { startStopGame, clearGame, resetGame } from '../controller';

const Game = ({ running, gameBoard, boardSize, mouseDown }) => (
  <div className="game-of-life">
    <Board
      size={ boardSize }
      board={ gameBoard }
      running={ running }
      mouseDown={ mouseDown }
    />
    <button onClick={ startStopGame }>
      { running ? 'Pause' : 'Start' }
    </button>
    <button onClick={ resetGame }>
      Reset
    </button>
    <button onClick={ clearGame }>
      Clear
    </button>
  </div>
);

export default Game;
