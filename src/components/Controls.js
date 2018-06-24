import React from 'react';
import { startStopGame, clearGame, resetGame } from '../controller';

const Controls = ({ running }) => (
  <div className="controls">
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

export default Controls;
