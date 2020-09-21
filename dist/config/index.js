"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 配置项
 */
// import path from "path";
var config = {
  mongoUrl: "106.54.42.57:27017",
  mongoUserPwd: "test:123456",
  mongoDB: "blog",
  mongoOptions: {
    autoIndex: true,
    useNewUrlParser: true
  }
};

var init = function init() {
  if (process.env.NODE_ENV === "dev") {
    var localConfig = {
      port: 3000
    };
    return config = _lodash["default"].assignIn(localConfig, config);
  }

  if (process.env.NODE_ENV === "production") {
    var proConfig = {
      port: 3000
    };
    return config = _lodash["default"].assignIn(proConfig, config);
  }
};

var result = init();
var _default = result;
exports["default"] = _default;