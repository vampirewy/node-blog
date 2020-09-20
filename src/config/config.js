/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:
 */
const config = new Map();
config.set("mongoUrl", "106.54.42.57:27017");
config.set("mongoUserPwd", "test:123456");
config.set("mongoDB", "blog");
config.set("mongoOptions", {
  autoIndex: true,
  useNewUrlParser: true,
});
config.set("port", 3000);
module.exports = config;
