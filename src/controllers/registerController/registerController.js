/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 注册
 */
import RegiserModel from "../../model/registerModel/registerModel";
class RegiserController {
  regiserAction() {
    return async ctx => {
      let [phone, pwd] = [ctx.request.body.phone, ctx.request.body.pwd];
      let regiserModel = new RegiserModel();
      const result = await regiserModel.sendRegiserRequest(phone, pwd);
      ctx.response.body = result;
    };
  }
}
export default RegiserController;
