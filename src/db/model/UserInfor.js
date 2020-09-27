/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 */
import mongoose, { Schema } from "mongoose";
const UserInforSchema = new Schema({
  headerImg: { type: String, default: "" },
  phone: { type: String, required: true },
  nikeName: { type: String, default: "" },
  sex: Number,
  birth: { type: String, default: "" },
  bloodType: Number,
  job: { type: String, default: "" },
  relationShip: Number,
  remarks: { type: String, default: "" },
});
const UserInfor = mongoose.model("UserInfor", UserInforSchema);
export default UserInfor;
