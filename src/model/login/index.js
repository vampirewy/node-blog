/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 登录model
 */
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const UserSchema = new Schema({
  name: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
