/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录数据模型
 */
import RegiserInfor from "../../db/model/RegiserInfor";
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
export default class LoginModel {
  constructor() {}
  async checkAccountRequest(phone, pwd) {
    const data = await RegiserInfor.find({ phone: phone });
    if (!data.length) {
      const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，请先注册帐号~");
      return responseResult;
    }
    if (data[0].phone === phone && data[0].pwd === pwd) {
      const responseResult = responseClient(STATUS_CODE.successCode, "", "登录成功");
      return responseResult;
    }
    const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，登录帐号或密码输入有误~");
    return responseResult;
  }
}
