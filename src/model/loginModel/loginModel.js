/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录数据模型
 */
import AccountModel from "../accountModel/accountModel";
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
import { encryption } from "../../utils/crypto";
import generateToken from "../../middleware/generateToken";
export default class LoginModel {
  async checkAccountRequest(phone, pwd) {
    const secretPwd = encryption(pwd);
    const accountModel = new AccountModel();
    const data = await accountModel.isRegiser(phone);
    if (!data.length) {
      const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，请先注册帐号~");
      return responseResult;
    }
    if (data[0].phone === phone && data[0].pwd === secretPwd) {
      let searchUserInforResult = null;
      const token = generateToken(phone, data[0]._id);
      const searchResult = await accountModel.searchUserInfor(phone);
      if (!searchResult) {
        const addResult = await accountModel.createUserInfor(phone);
        addResult && (searchUserInforResult = await accountModel.searchUserInfor(phone));
      } else {
        searchUserInforResult = searchResult;
      }
      await accountModel.updateToken(phone, token);
      searchUserInforResult = await accountModel.searchUserInfor(phone);
      searchUserInforResult.phone = searchUserInforResult.phone.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2");
      const finallyUserInfor = {
        phone: searchUserInforResult.phone,
        birth: searchUserInforResult.birth,
        headerImg: searchUserInforResult.headerImg,
        job: searchUserInforResult.job,
        nickName: searchUserInforResult.nickName,
        remarks: searchUserInforResult.remarks,
        createTime: searchUserInforResult.createTime.toLocaleString(),
      };
      const responseResult = responseClient(
        STATUS_CODE.successCode,
        { token: token, userInfor: finallyUserInfor },
        "登录成功",
      );
      return responseResult;
    }
    const responseResult = responseClient(STATUS_CODE.errorCode, "", "对不起，登录帐号或密码输入有误~");
    return responseResult;
  }
}
