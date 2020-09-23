/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 注册Model
 */
import RegiserInfor from "../../db/model/RegiserInfor";
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
class RegiserModel {
  constructor() {}
  async sendRegiserRequest(params) {
    const checkResult = await this.checkAccountRequest(params.phone);
    if (!checkResult) {
      try {
        const result = await new RegiserInfor(params).save();
        if (result) {
          const responseResult = responseClient(STATUS_CODE.successCode, "", "注册成功");
          return responseResult;
        }
      } catch (e) {
        const responseResult = responseClient(STATUS_CODE.errorCode, "", e.message);
        return responseResult;
      }
    }
    let data = checkResult;
    return data;
  }
  async checkAccountRequest(phone) {
    const data = await RegiserInfor.find({ phone: phone });
    if (data && data.length) {
      const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，该手机号已被注册~");
      return responseResult;
    }
  }
}
export default RegiserModel;
