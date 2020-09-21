"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("./controllers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 主文件入口
 */
require("./db/config/mongo");

var Koa = require("koa");

var bodyParser = require("koa-bodyparser");

var app = new Koa();
app.use(bodyParser());
app.use(_index["default"].routes()).use(_index["default"].allowedMethods());
app.listen(_config["default"].port, console.log("\u670D\u52A1\u542F\u52A8\u4E8E".concat(_config["default"].port, "\u7AEF\u53E3")));