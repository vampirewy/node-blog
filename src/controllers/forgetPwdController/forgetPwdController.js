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
    return async (ctx) => {
      let [phone, originalPwd, pwd] = [ctx.request.body.phone, ctx.request.body.originalPwd, ctx.request.body.pwd];
      await forgetPwdModel.sendResetPwdRequest(phone, originalPwd, pwd);
    };
  }
}
export default ForgetPwdController;
