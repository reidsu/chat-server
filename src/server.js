import Koa from "koa";
import router from "./router/index";
import bodyParser from "koa-bodyparser";
import IO from "koa-socket";
import cors from "koa2-cors";
import koaStatic from "koa-static";
import path from "path";
import msgPro from "./controller/messageProvider";

const app = new Koa();
const io = new IO();

const staticPath = '../static'
io.attach( app )


app._io.on( 'connection', sock => {
  sock.join("chat");
})

// init 
msgPro.init(io);
// setTimeout(() => {
//   io.broadcast('message', "hello, world");

// }, 5000);
app.use(koaStatic(
  path.join( __dirname,  staticPath)
))
app.use(cors());
app.use(bodyParser());
app.use(router.routes());


app.listen(3001);