"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message =
// type: file, text
// 
function Message(text) {
  _classCallCheck(this, Message);

  this.id = (0, _uuid2.default)();
  this.creationDate = new Date().getTime();
  this.text = text;
};

exports.default = Message;