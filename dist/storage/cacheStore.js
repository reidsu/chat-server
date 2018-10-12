"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.messageList = [];
  }

  _createClass(Store, [{
    key: "getList",
    value: function getList() {
      return this.messageList;
    }
  }, {
    key: "addMessage",
    value: function addMessage(text) {
      var message = new _message2.default(text);
      this.messageList.push(message);
      return message;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.messageList = [];
    }
  }]);

  return Store;
}();

exports.default = new Store();