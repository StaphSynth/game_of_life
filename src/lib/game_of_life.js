/*
  Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  Any live cell with two or three live neighbours lives on to the next generation.
  Any live cell with more than three live neighbours dies, as if by overpopulation.
  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

/*
  A cell is an object that contains an x y point describing its location
  A board is a set (array) of all currently alive cells (ie, all cells)
  Using arrays rather than Sets because the JS Set doesn't work well here
  where we aren't using primitive values. The union func ensures no duplicate elems.
*/

const union = (a, b) => (
  [...a, ...b].filter((elem, index, self) => (
    self.findIndex(e => elem.x === e.x && elem.y === e.y) === index
    )
  )
);

const intersection = (a, b) => (
  a.filter(elem => b.findIndex(e => elem.x === e.x && elem.y === e.y) > -1)
);

const neighbours = ({x, y}) => ([
  {x: x-1, y: y+1}, {x: x, y: y+1}, {x: x+1, y: y+1},
  {x: x-1, y: y},                   {x: x+1, y: y},
  {x: x-1, y: y-1}, {x: x, y: y-1}, {x: x+1, y: y-1}
]);

const allNeighbours = board => (
  board.reduce((acc, cell) => (
    union(acc, neighbours(cell))
  ), [])
);

const liveNeighbourCount = (cell, board) => (
  intersection(neighbours(cell), board).length
);

export const isAlive = (cell, board) => (
  intersection([cell], board).length > 0
);

const willLive = (cell, board) => {
  let liveNeighbours = liveNeighbourCount(cell, board);

  if(isAlive(cell, board)) {
    return liveNeighbours === 2 || liveNeighbours === 3
  } else {
    return liveNeighbours === 3
  }
};

export const nextGeneration = board => (
  allNeighbours(board).reduce((nextGen, cell) => (
    willLive(cell, board) ? union(nextGen, [cell]) : nextGen
  ), [])
);
