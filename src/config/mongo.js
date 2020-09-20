/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:  连接mongo
 */
const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(`mongodb://${config.get("mongoUserPwd")}@${config.get("mongoUrl")}/${config.get("mongoDB")}`, config.get("mongoOptions"));
mongoose.connection.on("error", (err) => {
  console.error("连接数据库失败", err);
});
mongoose.connection.once("open", () => {
  console.log("数据库已连接");
});
module.exports = mongoose;
