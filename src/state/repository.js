class Repository {
  constructor(initialState) {
    this.state = initialState;
    this.watchers = new Map();
  }

  get() {
    return this.state;
  }

  update(updateFunction) {
    const oldState = this.state;
    const newState = updateFunction(oldState);
    this.state = newState;
    this.notifyWatchers(oldState, newState);
    return newState;
  }

  reset(newState) {
    const oldState = this.state;
    this.state = newState;
    this.notifyWatchers(oldState, newState);
    return newState;
  }

  addWatcher(name, fn) {
    return this.watchers.set(name, fn);
  }

  notifyWatchers(oldState, newState) {
    this.watchers.forEach((watcher, name) => {
      watcher(oldState, newState, name);
    });
  }
}

export default Repository;
