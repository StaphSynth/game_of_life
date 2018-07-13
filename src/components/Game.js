import React from 'react';
import '../styles/main.scss';
import Board from './Board';
import Controls from './Controls';

const Game = ({ running, gameBoard, boardSize, mouseDown }) => (
  <div className="game-of-life">
    <Board
      size={ boardSize }
      board={ gameBoard }
      running={ running }
      mouseDown={ mouseDown }
    />
    <Controls running={ running } />
  </div>
);

export default Game;
