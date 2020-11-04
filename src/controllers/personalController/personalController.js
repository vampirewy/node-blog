/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 个人信息Control
 */
import PersonalModel from "../../model/personalModel/personalModel";
class PersonalController {
  getPersonalInforAction() {
    return async ctx => {
      const authorization = ctx.request.header.authorization.split(" ")[1];
      let personalModel = new PersonalModel();
      const inforResult = await personalModel.getPersonalInforRequest("", authorization);
      ctx.response.body = inforResult;
    };
  }
  savePersonalInforAction() {
    return async ctx => {
      console.log(ctx.request.body);
      let personalModel = new PersonalModel();
      const updatePersonalResult = await personalModel.savePersonalInforRequest(ctx.request.body);
      ctx.response.body = updatePersonalResult;
    };
  }
}
export default PersonalController;
