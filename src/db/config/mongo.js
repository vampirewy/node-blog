/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: mongo
 */
import config from "../../config";
const mongoose = require("mongoose");
mongoose.connect(`mongodb://${config.mongoUserPwd}@${config.mongoUrl}/${config.mongoDB}`, config.mongoOptions);
mongoose.connection.on("error", err => {
  console.error("连接数据库失败", err);
});
mongoose.connection.once("open", () => {
  console.log("数据库已连接");
});
export default mongoose;
