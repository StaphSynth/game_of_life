import React from 'react';
import { isAlive } from '../lib/game_of_life';
import { addRemoveCell } from '../controller';

const Board = ({ board, size, running }) => (
  <table className="board">
    <tbody>
      { generateTable(board, size, running) }
    </tbody>
  </table>
);

const generateTable = (board, size, running) => {
  let tableRows = [];
  let tableRow = [];

  for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
      tableRow.push(
        <Cell
          key={ x }
          x={ x }
          y={ y }
          alive={ isAlive({ x, y }, board) }
          running={ running }
        />
      );
    }
    tableRows.push(<tr key={ y }>{ tableRow }</tr>);
    tableRow = [];
  }
  return tableRows;
};

const Cell = ({ x, y, alive, running }) => {
  const handleClick = () => {
    !running && addRemoveCell({ x, y });
  };

  return (
    <td
      data-x={ x }
      data-y={ y }
      className={ alive ? 'alive' : undefined }
      onClick={ () => handleClick() }
    />
  );
};

export default Board;
