/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 帐户信息相关
 */
import RegiserInfor from "../../db/model/RegiserInfor";
import UserInfor from "../../db/model/UserInfor";
class AccountModel {
  //是否已被注册
  async isRegiser(phone) {
    const data = await RegiserInfor.find({ phone: phone });
    return data;
  }
  //更新密码
  async updateInfor(phone, newPwd) {
    const data = await RegiserInfor.updateOne(
      { phone: phone },
      {
        $set: {
          pwd: newPwd,
        },
      },
    );
    return data;
  }
  //创建用户信息
  async createUserInfor(phone) {
    const addResult = await new UserInfor({
      phone: phone,
    }).save();
    return addResult;
  }
  //更新token信息
  async updateToken(phone, token) {
    const updateResult = await UserInfor.updateOne(
      {
        phone: phone,
      },
      {
        $set: {
          authorization: token,
        },
      },
    );
    return updateResult;
  }
  //查询用户信息
  async searchUserInfor(phone) {
    const searchUserInforResult = await UserInfor.findOne({
      phone: phone,
    });
    return searchUserInforResult;
  }
}
export default AccountModel;
