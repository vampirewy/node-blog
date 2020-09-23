/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 */
import mongoose, { Schema } from "mongoose";
const UserInforSchema = new Schema({
  phone: String,
  nikeName: String,
  sex: Number,
  birth: { type: String, default: "" },
  bloodType: Number,
  job: String,
  relationShip: Number,
  city: String,
  province: String,
  remarks: String,
});
const UserInfor = mongoose.model("UserInfor", UserInforSchema);
export default UserInfor;
