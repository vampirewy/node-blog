/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录路由
 */
import LoginModel from "../../model/loginModel/loginModel";
export default class LoginController {
  constructor() {}
  loginAction() {
    return async (ctx) => {
      const loginModel = new LoginModel();
      let [phone, pwd] = [ctx.request.body.phone, ctx.request.body.pwd];
      const result = await loginModel.checkAccountRequest(phone, pwd);
      ctx.response.body = result;
    };
  }
}
