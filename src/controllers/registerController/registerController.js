/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import RegiserModel from "../../model/registerModel/registerModel";
class RegiserController {
  regiserAction() {
    return async (ctx) => {
      let regiserModel = new RegiserModel();
      const result = await regiserModel.sendRegiserRequest(ctx.request.body);
      ctx.response.body = result;
    };
  }
}
export default RegiserController;
