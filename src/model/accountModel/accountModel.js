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
  //返回token相同的数据
  async getAuthorization(token) {
    const data = await RegiserInfor.findOne({ authorization: token });
    return data;
  }
  //更新token
  async updateToken(phone, newToken) {
    const data = await RegiserInfor.updateOne(
      { phone: phone },
      {
        $set: {
          authorization: newToken,
        },
      },
    );
    return data;
  }
  //清除token
  async clearToken(token) {
    const data = await RegiserInfor.updateOne(
      {
        authorization: token,
      },
      {
        $set: {
          authorization: "",
        },
      },
    );
    return data;
  }
  //登录后创建用户信息
  async createUserInfor(phone) {
    const addResult = await new UserInfor({
      phone: phone,
    }).save();
    return addResult;
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
