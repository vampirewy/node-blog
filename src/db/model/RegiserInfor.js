/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:  注册信息
 */
import mongoose, { Schema } from "mongoose";
const RegiserInforSchema = new Schema({
  phone: { type: String, required: true },
  pwd: { type: String, required: true },
  createTime: { type: Date, default: Date.now },
});
const RegiserInfor = mongoose.model("RegiserInfor", RegiserInforSchema);
export default RegiserInfor;
