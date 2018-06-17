import { root } from './index';

let state = {
  boardSize: 50,
  gameBoard: [],
  initialBoardState: [],
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
