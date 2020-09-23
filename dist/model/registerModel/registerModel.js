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

var RegiserModel = /*#__PURE__*/function () {
  function RegiserModel() {
    _classCallCheck(this, RegiserModel);
  }

  _createClass(RegiserModel, [{
    key: "sendRegiserRequest",
    value: function () {
      var _sendRegiserRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var checkResult, result, responseResult, _responseResult, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.checkAccountRequest(params.phone);

              case 2:
                checkResult = _context.sent;

                if (checkResult) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return new _RegiserInfor["default"](params).save();

              case 7:
                result = _context.sent;

                if (!result) {
                  _context.next = 11;
                  break;
                }

                responseResult = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.successCode, "", "注册成功");
                return _context.abrupt("return", responseResult);

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);
                _responseResult = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.errorCode, "", _context.t0.message);
                return _context.abrupt("return", _responseResult);

              case 17:
                data = checkResult;
                return _context.abrupt("return", data);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function sendRegiserRequest(_x) {
        return _sendRegiserRequest.apply(this, arguments);
      }

      return sendRegiserRequest;
    }()
  }, {
    key: "checkAccountRequest",
    value: function () {
      var _checkAccountRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(phone) {
        var data, responseResult;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _RegiserInfor["default"].find({
                  phone: phone
                });

              case 2:
                data = _context2.sent;

                if (!(data && data.length)) {
                  _context2.next = 6;
                  break;
                }

                responseResult = (0, _responseClient.responseClient)(_responseClient.STATUS_CODE.errorCode, "", "对不起，该手机号已被注册~");
                return _context2.abrupt("return", responseResult);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkAccountRequest(_x2) {
        return _checkAccountRequest.apply(this, arguments);
      }

      return checkAccountRequest;
    }()
  }]);

  return RegiserModel;
}();

var _default = RegiserModel;
exports["default"] = _default;