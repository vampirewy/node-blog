/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 验证authorization
 */
import jwt from "jsonwebtoken";
import config from "../config/index";
import generateToken from "../middleware/generateToken";
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
            jwt.verify(token, config.secret, {
              complete: true,
            });
          } catch (e) {
            console.log("e", e.message);
            let accountModel = new AccountModel();
            const { phone, _id } = await accountModel.getAuthorization(token);
            const newToken = generateToken(phone, _id);
            const updateResult = await accountModel.updateToken(phone, newToken);
            updateResult && ctx.response.set("Authorization", newToken);
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
