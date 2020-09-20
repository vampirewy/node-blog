/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:
 */
const Router = require("koa-router");
const router = new Router();
const User = require("../model/login/index");
router.get("/", async (ctx, next) => {
  // let user = {
  //   name: "王小丫",
  // };
  // const newUser = new User(user);
  // newUser.save();
  const data = await User.find();
  console.log(data);
  ctx.response.body = {
    code: 200,
    data: data,
    msg: "",
  };
});
module.exports = router;
