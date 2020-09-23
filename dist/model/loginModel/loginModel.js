"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RegiserInfor = _interopRequireDefault(require("../../db/model/RegiserInfor"));

var _responseClient = require("../../utils/responseClient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LoginModel = /*#__PURE__*/function () {
  function LoginModel() {
    _classCallCheck(this, LoginModel);
  }

  _createClass(LoginModel, [{
    key: "checkAccountRequest",
    value: function () {
      var _checkAccountRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(phone, pwd) {
        var data, _responseResult, _responseResult2, responseResult;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _RegiserInfor["default"].find({
                  phone: phone
                });

              case 2:
                data = _context.sent;

                if (data.length) {
                  _context.next = 6;
                  break;
                }

                _responseResult = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.errorCode, "", "对不起，请先注册帐号~");
                return _context.abrupt("return", _responseResult);

              case 6:
                if (!(data[0].phone === phone && data[0].pwd === pwd)) {
                  _context.next = 9;
                  break;
                }

                _responseResult2 = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.successCode, "", "登录成功");
                return _context.abrupt("return", _responseResult2);

              case 9:
                responseResult = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.errorCode, "", "对不起，登录帐号或密码输入有误~");
                return _context.abrupt("return", responseResult);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkAccountRequest(_x, _x2) {
        return _checkAccountRequest.apply(this, arguments);
      }

      return checkAccountRequest;
    }()
  }]);

  return LoginModel;
}();

exports["default"] = LoginModel;