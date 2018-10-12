"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../storage/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageProvider = exports.MessageProvider = function () {
  function MessageProvider() {
    _classCallCheck(this, MessageProvider);
  }

  _createClass(MessageProvider, [{
    key: "init",
    value: function init(io) {
      this.io = io;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return _index2.default.getList();
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(text) {
      var message = _index2.default.addMessage(text);
      this._dispatch();
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      _index2.default.removeAll();
      this._dispatch();
    }
  }, {
    key: "_dispatch",
    value: function _dispatch() {
      this.io.broadcast('message', "hello, world");
    }
  }]);

  return MessageProvider;
}();

exports.default = new MessageProvider();