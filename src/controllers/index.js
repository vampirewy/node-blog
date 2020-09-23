/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 路由总控
 */
import Router from "koa-router";
import LoginController from "./loginController/loginController";
import RegiserController from "./registerController/registerController";
import ForgetPwdController from './forgetPwdController/forgetPwdController';
const router = new Router({
  prefix: "/api",
});
const LoginControl = new LoginController();
const RegiserControl = new RegiserController();
const ForgetControl = new ForgetPwdController();
router.post("/login", LoginControl.loginAction());
router.post("/regiser", RegiserControl.regiserAction());
router.put("/resetpwd",ForgetControl.retsetPwdAction());
export default router;
