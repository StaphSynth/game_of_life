import React from 'react';
import { isAlive } from '../lib/game_of_life';
import { addRemoveCell, handleMouseDownUp, addCell } from '../controller';

const Board = ({ board, size, running, mouseDown }) => (
  <table
    className="board"
    onMouseDown={ handleMouseDownUp }
    onMouseUp={ handleMouseDownUp }
  >
    <tbody>
      { generateTable(board, size, running, mouseDown) }
    </tbody>
  </table>
);

const generateTable = (board, size, running, mouseDown) => {
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
          mouseDown={ mouseDown }
        />
      );
    }
    tableRows.push(<tr key={ y }>{ tableRow }</tr>);
    tableRow = [];
  }
  return tableRows;
};

const Cell = ({ x, y, alive, running, mouseDown }) => {
  const handleClick = () => {
    !running && addRemoveCell({ x, y });
  };

  const handleMouseOver = () => {
    if (!running && mouseDown) {
      addCell({ x, y });
    }
  };

  return (
    <td
      data-x={ x }
      data-y={ y }
      className={ alive ? 'alive' : undefined }
      onClick={ handleClick }
      onMouseOver={ handleMouseOver }
    />
  );
};

export default Board;
