/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 主文件入口
 */
require("./config/mongo");
const Koa = require("koa");
const config = require('./config/config');
const bodyParser = require("koa-bodyparser");
const router = require("./router/index");
const app = new Koa();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.get("port"), console.log(`服务启动于${config.get("port")}端口`));
