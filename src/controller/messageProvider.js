import store from "../storage/index";

class MessageProvider {
  getAll() {
    return store.getList();
  }
  sendMessage(text) {
    const message = store.addMessage(text);
    this._dispatch(message);
  }
  removeAll() {
    store.removeAll();
  }
  _dispatch() {

  }
}

export default new MessageProvider();