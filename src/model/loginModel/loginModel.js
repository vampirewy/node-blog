/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录数据模型
 */
import User from "../../db/model/login";
 // let user = {
  //   name: "王小丫",
  // };
  // const newUser = new User(user);
  // newUser.save();
export default class LoginModel {
  constructor() {}
  async getData() {
    const data = await User.find();
    return data;
  }
}
