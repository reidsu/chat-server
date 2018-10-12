"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _index = require("./router/index");

var _index2 = _interopRequireDefault(_index);

var _koaBodyparser = require("koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSocket = require("koa-socket");

var _koaSocket2 = _interopRequireDefault(_koaSocket);

var _koa2Cors = require("koa2-cors");

var _koa2Cors2 = _interopRequireDefault(_koa2Cors);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _messageProvider = require("./controller/messageProvider");

var _messageProvider2 = _interopRequireDefault(_messageProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var io = new _koaSocket2.default();

var staticPath = '../static';
io.attach(app);

app._io.on('connection', function (sock) {
  sock.join("chat");
});

// init 
_messageProvider2.default.init(io);
// setTimeout(() => {
//   io.broadcast('message', "hello, world");

// }, 5000);
app.use((0, _koaStatic2.default)(_path2.default.join(__dirname, staticPath)));
app.use((0, _koa2Cors2.default)());
app.use((0, _koaBodyparser2.default)());
app.use(_index2.default.routes());

app.listen(3001);