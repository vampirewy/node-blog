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
      const result = await loginModel.getData();
      ctx.response.body = {
        code: 200,
        data: result,
        msg: "",
      };
    };
  }
}
