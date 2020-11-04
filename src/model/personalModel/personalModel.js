/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 个人信息Model
 */
import AccountModel from "../accountModel/accountModel";
import { responseClient, STATUS_CODE } from "../../utils/responseClient";
class PersonalModel {
  async getPersonalInforRequest(phone, authorization) {
    const accountModel = new AccountModel();
    const inforResult = await accountModel.searchUserInfor(phone, authorization);
    if (inforResult) return responseClient(STATUS_CODE.successCode, inforResult, "成功");
    return responseClient(STATUS_CODE.errorCode, "", "数据提取失败");
  }
  async savePersonalInforRequest(params) {
    const accountModel = new AccountModel();
    const updatePersonalResult = await accountModel.updatePersonalInfor(params);
    if (updatePersonalResult) return responseClient(STATUS_CODE.successCode, "", "保存成功");
    return responseClient(STATUS_CODE.errorCode, "", "保存失败");
  }
}
export default PersonalModel;
