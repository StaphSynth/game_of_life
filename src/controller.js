import { getState, updateState } from './state_management/repository';
import { nextGeneration } from './lib/game_of_life';

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
}

export const currentGameState = () => (
  getState()
);
