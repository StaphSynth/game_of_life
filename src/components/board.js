import React from 'react';
import { isAlive } from '../lib/game_of_life';
import { addRemoveCell, currentGameState } from '../controller';

const Board = ({ board, size }) => (
  <table className="board">
    <tbody>
      { generateTable(board, size) }
    </tbody>
  </table>
);

const generateTable = (board, size) => {
  let tableRows = [];
  let tableRow = [];

  for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
      tableRow.push(<Cell key={ x } x={ x } y={ y } board={ board } />);
    }
    tableRows.push(<tr key={ y }>{ tableRow }</tr>);
    tableRow = [];
  }
  return tableRows;
};

const Cell = ({ x, y, board }) => {
  const handleClick = () => {
    const { running } = currentGameState();
    !running && addRemoveCell({ x, y });
  };

  return (
    <td
      data-x={ x }
      data-y={ y }
      className={ isAlive({ x, y }, board) ? 'alive' : undefined }
      onClick={ () => handleClick() }
    />
  );
};

export default Board;
