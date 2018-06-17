import { getState, updateState } from './repository';
import { nextGeneration, isAlive } from './lib/game_of_life';

export const nextBoard = () => {
  updateState(state => (
    { ...state, gameBoard: nextGeneration(state.gameBoard) }
  ));
};

export const startStopGame = () => {
  const { running, intervalId } = getState();

  if (running) {
    clearInterval(intervalId);
    updateState(state => (
      { ...state, running: false, intervalId: null }
    ));
  } else {
    updateState(state => (
      {
        ...state,
        running: true,
        intervalId: setInterval(nextBoard, state.interval)
      }
    ))
  }
};

export const resetGame = () => {
  const { intervalId } = getState();

  clearInterval(intervalId);
  updateState(state => (
    { ...state, gameBoard: [], running: false, intervalId: null }
  ));
};

export const addRemoveCell = (cell) => {
  const { gameBoard } = getState();
  const removeCell = (board, cell) => (
    board.filter(elem => (
      !(elem.x === cell.x && elem.y === cell.y)
    ))
  );

  if (isAlive(cell, gameBoard)) {
    updateState(state => (
      { ...state, gameBoard: removeCell(gameBoard, cell) }
    ));
  } else {
    updateState(state => (
      { ...state, gameBoard: [...gameBoard, cell] }
    ));
  }
};

export const currentGameState = () => (
  getState()
);
