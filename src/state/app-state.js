import Repository from './repository';
import { root } from '../index';


const state = new Repository({
  boardSize: 50,
  gameBoard: [],
  initialBoardState: [],
  interval: 200, //time (ms) between board re-render
  intervalId: null,
  running: false,
  mouseDown: false
});

state.addWatcher('forceUpdate', (_oldState, _newState, _name) => {
  root.forceUpdate();
});

export default state;
