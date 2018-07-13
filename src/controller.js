import gameState from './state/app-state';
import { nextGeneration, isAlive, union } from './lib/game_of_life';

export const nextBoard = () => {
  gameState.update(state => (
    { ...state, gameBoard: nextGeneration(state.gameBoard) }
  ));
};

export const startStopGame = () => {
  const { running } = gameState.get();
  running ? pauseGame() : startGame();
};

const pauseGame = () => {
  const { intervalId } = gameState.get();

  clearInterval(intervalId);
  gameState.update(state => (
    { ...state, running: false, intervalId: null }
  ));
};

const startGame = () => {
  const { initialBoardState } = gameState.get();

  if (initialBoardState.length <= 0) {
    gameState.update(state => ({
      ...state,
      initialBoardState: state.gameBoard
    }));
  }

  gameState.update(state => ({
      ...state,
      running: true,
      intervalId: setInterval(nextBoard, state.interval)
  }));
};

export const clearGame = () => {
  const { intervalId } = gameState.get();

  clearInterval(intervalId);
  gameState.update(state => ({
    ...state,
    gameBoard: [],
    initialBoardState: [],
    running: false,
    intervalId: null
  }));
};

export const addRemoveCell = (cell) => {
  const { gameBoard } = gameState.get();
  const removeCell = (board, cell) => (
    board.filter(elem => (
      !(elem.x === cell.x && elem.y === cell.y)
    ))
  );

  if (isAlive(cell, gameBoard)) {
    gameState.update(state => (
      { ...state, gameBoard: removeCell(gameBoard, cell) }
    ));
  } else {
    gameState.update(state => (
      { ...state, gameBoard: union(gameBoard, [cell]) }
    ));
  }
};

export const addCell = (cell) => {
  const { gameBoard } = gameState.get();

  gameState.update(state => (
    { ...state, gameBoard: union(gameBoard, [cell]) }
  ));
};

export const resetGame = () => {
  const { initialBoardState } = gameState.get();

  pauseGame();
  gameState.update(state => (
    { ...state, gameBoard: initialBoardState }
  ));
};

export const currentGameState = () => (
  gameState.get()
);

export const handleMouseDownUp = () => {
  const { mouseDown } = gameState.get();

  gameState.update(state => (
    { ...state, mouseDown: !mouseDown }
  ));
};
