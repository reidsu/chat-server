import store from "../storage/index";

export class MessageProvider {
  init(io) {
    this.io = io;
  }
  getAll() {
    return store.getList();
  }
  sendMessage(text) {
    const message = store.addMessage(text);
    this._dispatch();
  }
  removeAll() {
    store.removeAll();
    this._dispatch();
  }
  _dispatch() {
    this.io.broadcast('message', "hello, world");
  }
}

export default new MessageProvider();