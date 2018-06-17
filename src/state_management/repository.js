import { root } from '../index';

let state = {
  boardSize: 20,
  gameBoard: [{ x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 6, y: 3 }],
  interval: 200, //time (ms) between board re-render
  intervalId: null,
  running: false,
};

export const getState = () => (
  state
);

export const updateState = (updateFunction) => {
  state = updateFunction(state);
  root.forceUpdate();
};

export const resetState = (newState) => {
  state = newState;
  root.forceUpdate();
};
