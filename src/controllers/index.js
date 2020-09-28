/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 路由总控
 */
import Router from "koa-router";
import LoginController from "./loginController/loginController";
import RegiserController from "./registerController/registerController";
import ForgetPwdController from "./forgetPwdController/forgetPwdController";

export const protectedRouter = new Router({
  prefix: "/api",
});
const LoginControl = new LoginController();
const RegiserControl = new RegiserController();
const ForgetControl = new ForgetPwdController();

export const unprotectedRouter = new Router({
  prefix: "/api",
});
unprotectedRouter.post("/login", LoginControl.loginInAction());
protectedRouter.post("/register", RegiserControl.regiserAction());
unprotectedRouter.put("/resetpwd", ForgetControl.retsetPwdAction());
