/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:  忘记密码control
 */
import ForgetPwdModel from "../../model/forgetPwdModel/forgetPwdModel";
let forgetPwdModel = new ForgetPwdModel();
class ForgetPwdController {
  constructor() {}
  retsetPwdAction() {
    return async ctx => {
      let [phone, originalPwd, pwd, rePwd] = [
        ctx.request.body.phone,
        ctx.request.body.originalPwd,
        ctx.request.body.pwd,
        ctx.request.body.rePwd,
      ];
      const responseResult = await forgetPwdModel.sendResetPwdRequest(phone, originalPwd, pwd, rePwd);
      ctx.response.body = responseResult;
    };
  }
}
export default ForgetPwdController;
