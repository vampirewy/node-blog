"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _loginController = _interopRequireDefault(require("./loginController/loginController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 路由总控
 */
var router = new _koaRouter["default"]();
var LoginControl = new _loginController["default"]();
router.get("/", LoginControl.loginAction());
var _default = router;
exports["default"] = _default;