/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 返回客户端
 */
export const STATUS_CODE = {
  successCode: 200,
  errorCode: 500,
  tokenExpire: 401,
};
export function responseClient(code, data, msg = "") {
  let responseResult = {
    code: code,
    data: data || "",
    msg: msg || "",
  };
  return responseResult;
}
