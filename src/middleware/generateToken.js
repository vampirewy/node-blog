/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 生成authorization
 */
import jwt from "jsonwebtoken";
import config from "../config/index";
function generateToken(phone, currentId) {
  const payload = { phone: phone, currentId: currentId };
  const token = jwt.sign(payload, config.secret, { expiresIn: "1h" });
  return token;
}
export default generateToken;
