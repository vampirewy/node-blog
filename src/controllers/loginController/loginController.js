/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录路由
 */
import LoginModel from "../../model/loginModel/loginModel";
export default class LoginController {
  loginInAction() {
    return async ctx => {
      const loginModel = new LoginModel();
      let [phone, pwd] = [ctx.request.body.phone, ctx.request.body.pwd];
      const responseResult = await loginModel.checkAccountRequest(phone, pwd);
      ctx.response.body = responseResult;
    };
  }
  // loginOutAction() {
  //   return async ctx => {
  //     const loginModel = new LoginModel();
  //     const responseResult = await loginModel.outRequest(ctx.request.header.authorization.replace(/Bearer /, ""));
  //     ctx.response.body = responseResult;
  //   };
  // }
}
