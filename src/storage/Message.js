import uuid from "uuid";

class Message {
  // type: file, text
  // 
  constructor(text) {
    this.id = uuid();
    this.creationDate = new Date().getTime();
    this.text = text;
  }
}

export default Message;