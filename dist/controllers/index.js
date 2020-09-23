"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _loginController = _interopRequireDefault(require("./loginController/loginController"));

var _registerController = _interopRequireDefault(require("./registerController/registerController"));

var _forgetPwdController = _interopRequireDefault(require("./forgetPwdController/forgetPwdController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 路由总控
 */
var router = new _koaRouter["default"]({
  prefix: "/api"
});
var LoginControl = new _loginController["default"]();
var RegiserControl = new _registerController["default"]();
var ForgetControl = new _forgetPwdController["default"]();
router.post("/login", LoginControl.loginAction());
router.post("/regiser", RegiserControl.regiserAction());
router.put("/resetpwd", ForgetControl.retsetPwdAction());
var _default = router;
exports["default"] = _default;