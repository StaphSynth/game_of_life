import React from 'react';

const Board = ({ board, size }) => {
  return (
    <table className="board">
      <tbody>
        { generateTable(board, size) }
      </tbody>
    </table>
  );
};

const generateTable = (board, size) => {
  let tableRows = [];
  let tableRow = [];
  
  for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
      tableRow.push(<td key={ x } className={ isCell(x, y, board) }></td>);
    }
    tableRows.push(<tr key={ y }>{ tableRow }</tr>);
    tableRow = [];
  }
  return tableRows;
};

const isCell = (x, y, board) => {
  if(board.findIndex(elem => elem.x === x && elem.y === y) > -1) {
    return 'cell';
  }
};

export default Board;
