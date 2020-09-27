/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 注册Model
 */
import RegiserInfor from "../../db/model/RegiserInfor";
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
import { encryption } from "../../utils/crypto";
import AccountModel from "../accountModel/accountModel";
class RegiserModel {
  async sendRegiserRequest(phone, pwd) {
    const secretPwd = encryption(pwd);
    const checkResult = await this.checkAccountRequest(phone);
    if (!checkResult) {
      // try {
      const result = await new RegiserInfor({
        phone: phone,
        pwd: secretPwd,
      }).save();
      if (result) {
        const responseResult = responseClient(STATUS_CODE.successCode, "", "注册成功");
        return responseResult;
      }
      // } catch (e) {
      //   const responseResult = responseClient(STATUS_CODE.errorCode, "", e.message);
      //   return responseResult;
      // }
    }
    let data = checkResult;
    return data;
  }
  async checkAccountRequest(phone) {
    const accountModel = new AccountModel();
    const data = await accountModel.isRegiser(phone);
    if (data && data.length) {
      const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，该手机号已被注册~");
      return responseResult;
    }
  }
}
export default RegiserModel;
