import Router from "koa-router";
import msgPro from "../controller/messageProvider";

const router = new Router();


router.post("/message", async (ctx) => {
  if (!ctx.request.body || !ctx.request.body.text) {
    ctx.throw("text not allow null", 400)
  }
  msgPro.sendMessage(ctx.request.body.text);
  ctx.body = {message: "success"}
});

router.get("/message", async (ctx) => {
  const list = msgPro.getAll();
  ctx.body = list;
});

router.delete("/message", async (ctx) => {
  msgPro.removeAll();
  ctx.body = {message: "删除成功"}
});

export default router;