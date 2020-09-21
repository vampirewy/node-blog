/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  name: String,
});
const User = mongoose.model("User", UserSchema);
export default User;
