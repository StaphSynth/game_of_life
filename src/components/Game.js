import React from 'react';
import '../App.css';
import Board from './Board';
import { startStopGame } from '../controller';

const Game = ({ running, gameBoard, boardSize }) => (
  <div className="game-of-life">
    <Board
      size={ boardSize }
      board={ gameBoard }
    />
    <button onClick={ () => startStopGame() }>
      { running ? 'Pause' : 'Start' }
    </button>
  </div>
);

export default Game;
