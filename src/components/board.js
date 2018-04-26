import React from 'react';

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

const Cell = ({ x, y, board }) => (
  <td
    data-x={ x }
    data-y={ y }
    className={ isAlive(x, y, board) }
  />
);

const isAlive = (x, y, board) => {
  if(board.findIndex(elem => elem.x === x && elem.y === y) > -1) {
    return 'alive';
  }
};

export default Board;
