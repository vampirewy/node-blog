/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 加密
 */
import crypto from "crypto";
export function encryption(pwd) {
  let hmac = crypto.createHmac("sha256", pwd);
  return hmac.digest("hex");
}
