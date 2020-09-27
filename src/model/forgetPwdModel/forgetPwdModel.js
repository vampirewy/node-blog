/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 忘记密码Model
 */
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
import { encryption } from "../../utils/crypto";
import AccountModel from "../accountModel/accountModel";
class ForgetPwdModel {
  async sendResetPwdRequest(phone, originalPwd, pwd, rePwd) {
    let responseResult = null;
    const accountModel = new AccountModel();
    const data = await accountModel.isRegiser(phone);
    if (!data.length) return (responseResult = responseClient(STATUS_CODE.errorCode, "", "该手机号还未被注册~"));
    const secretPwd = encryption(pwd);
    responseResult = await accountModel.updateInfor(phone, secretPwd);
    return responseResult && (responseResult = responseClient(STATUS_CODE.successCode, "", "修改成功~"));
  }
}
export default ForgetPwdModel;
