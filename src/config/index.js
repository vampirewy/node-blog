/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 配置项
 */
import _ from "lodash";
// import path from "path";

let config = {
  mongoUrl: "106.54.42.57:27017",
  mongoUserPwd: "test:123456",
  mongoDB: "blog",
  mongoOptions: {
    autoIndex: true,
    useNewUrlParser: true,
  },
};

const init = () => {
  if (process.env.NODE_ENV === "dev") {
    const localConfig = {
      port: 3000
    };
    return (config = _.assignIn(localConfig, config));
  }
  if (process.env.NODE_ENV === "production") {
    const proConfig = {
      port: 3000
    };
    return (config = _.assignIn(proConfig, config));
  }
};
const result = init();
export default result;
