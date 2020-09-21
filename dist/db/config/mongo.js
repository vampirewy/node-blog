"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../config/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: mongo
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://".concat(_index["default"].mongoUserPwd, "@").concat(_index["default"].mongoUrl, "/").concat(_index["default"].mongoDB), _index["default"].mongoOptions);
mongoose.connection.on("error", function (err) {
  console.error("连接数据库失败", err);
});
mongoose.connection.once("open", function () {
  console.log("数据库已连接");
});
var _default = mongoose;
exports["default"] = _default;