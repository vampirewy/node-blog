/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 主文件入口
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
require("./db/config/mongo");
const Koa = require("koa");
import config from "./config";
const bodyParser = require("koa-bodyparser");
import router from "./controllers/index";
const app = new Koa();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port, console.log(`服务启动于${config.port}端口`));
