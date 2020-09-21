/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 路由总控
 */
import Router from "koa-router";
import LoginController from "./loginController/loginController";
const router = new Router();
const LoginControl = new LoginController();
router.get("/", LoginControl.loginAction());
export default router;
