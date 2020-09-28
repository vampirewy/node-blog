/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 验证authorization
 */
import jwt from "jsonwebtoken";
import config from "../config/index";
import generateToken from "../middleware/generateToken";
import { responseClient, STATUS_CODE } from "../utils/responseClient";
import AccountModel from "../model/accountModel/accountModel";
const validationToken = {
  validation(app) {
    app.use(async (ctx, next) => {
      if (ctx.request.method !== "OPTIONS") {
        const authorization = ctx.headers.authorization.split(" ");
        const scheme = authorization[0];
        const token = authorization[1];
        if (/^Bearer$/i.test(scheme)) {
          try {
            const { payload } = jwt.verify(token, config.secret, {
              complete: true,
            });
            //过期时间小于15分钟，生成新token
            if (payload.exp - Date.now() / 1000 <= 900) {
              const newToken = generateToken(payload.phone, payload.currentId);
              await new AccountModel().updateToken(payload.phone, payload.currentId);
              ctx.response.set("Authorization", newToken);
            }
          } catch (e) {
            console.log("e", e.message);
            return (ctx.response.body = responseClient(STATUS_CODE.tokenExpire, "", "token过期，请重新登录"));
          }
        }
      }
      return next().catch(err => {
        console.log(err);
        if (err.status === 401) {
          ctx.status = 401;
          ctx.body = {
            error: err.originalError ? err.originalError.message : err.message,
          };
        } else {
          throw err;
        }
      });
    });
  },
};
export default validationToken;
