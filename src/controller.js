import { getState, updateState } from './repository';
import { nextGeneration, isAlive, union } from './lib/game_of_life';

export const nextBoard = () => {
  updateState(state => (
    { ...state, gameBoard: nextGeneration(state.gameBoard) }
  ));
};

export const startStopGame = () => {
  const { running } = getState();
  running ? pauseGame() : startGame();
};

const pauseGame = () => {
  const { intervalId } = getState();

  clearInterval(intervalId);
  updateState(state => (
    { ...state, running: false, intervalId: null }
  ));
};

const startGame = () => {
  const { initialBoardState } = getState();

  if (initialBoardState.length <= 0) {
    updateState(state => ({
      ...state,
      initialBoardState: state.gameBoard
    }));
  }

  updateState(state => ({
      ...state,
      running: true,
      intervalId: setInterval(nextBoard, state.interval)
  }));
};

export const clearGame = () => {
  const { intervalId } = getState();

  clearInterval(intervalId);
  updateState(state => ({
    ...state,
    gameBoard: [],
    initialBoardState: [],
    running: false,
    intervalId: null
  }));
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
      { ...state, gameBoard: union(gameBoard, [cell]) }
    ));
  }
};

export const addCell = (cell) => {
  const { gameBoard } = getState();

  updateState(state => (
    { ...state, gameBoard: union(gameBoard, [cell]) }
  ));
};

export const resetGame = () => {
  const { initialBoardState } = getState();

  pauseGame();
  updateState(state => (
    { ...state, gameBoard: initialBoardState }
  ));
};

export const currentGameState = () => (
  getState()
);

export const handleMouseDownUp = () => {
  const { mouseDown } = getState();

  updateState(state => (
    { ...state, mouseDown: !mouseDown }
  ));
};
