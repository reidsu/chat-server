import Message from "./message";

class Store {
  constructor() {
    this.messageList = [];
  }
  getList() {
    return this.messageList;
  }
  addMessage(text) {
    const message = new Message(text);
    this.messageList.push(message);
    return message;
  }
  removeAll(){
    this.messageList = []; 
  }
}


export default new Store;