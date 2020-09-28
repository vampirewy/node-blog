/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 */
import mongoose, { Schema } from "mongoose";
const UserInforSchema = new Schema({
  headerImg: { type: String, default: "" },
  authorization: { type: String, default: "" },
  phone: { type: String, required: true },
  nickName: { type: String, default: "" },
  // 0|女 1|男 2|保密
  sex: Number,
  // yyyy-MM-dd
  birth: { type: String, default: "" },
  // 1|O型 2|A型 3|AB型
  bloodType: Number,
  job: { type: String, default: "" },
  // 0|未婚 1|已婚 2|离婚
  relationShip: Number,
  remarks: { type: String, default: "" },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
});
const UserInfor = mongoose.model("UserInfor", UserInforSchema);
export default UserInfor;
