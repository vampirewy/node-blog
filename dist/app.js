"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("./controllers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("./db/config/mongo");

var Koa = require("koa");

var bodyParser = require("koa-bodyparser");

var app = new Koa();
app.use(bodyParser());
app.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(ctx.request.header);
            // 允许来自所有域名请求
            ctx.set("Access-Control-Allow-Origin", "*"); // 这样就能只允许 http://localhost:8080 这个域名的请求了
            // ctx.set("Access-Control-Allow-Origin", ctx.request.origin);
            // 设置所允许的HTTP请求方法

            ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE"); // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.

            ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type,token"); // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
            // Content-Type表示具体请求中的媒体类型信息

            ctx.set("Content-Type", "application/json;charset=utf-8"); // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
            // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
            // ctx.set("Access-Control-Allow-Credentials", true);
            // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
            // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
            // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
            // ctx.set("Access-Control-Max-Age", 300);

            /*
            CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
                Cache-Control、
                Content-Language、
                Content-Type、
                Expires、
                Last-Modified、
                Pragma。
            */
            // 需要获取其他字段时，使用Access-Control-Expose-Headers，
            // getResponseHeader('myData')可以返回我们所需的值
            // ctx.set("Access-Control-Expose-Headers", "myData");

            _context.next = 6;
            return next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use(_index["default"].routes()).use(_index["default"].allowedMethods());
app.listen(_config["default"].port, console.log("\u670D\u52A1\u542F\u52A8\u4E8E".concat(_config["default"].port, "\u7AEF\u53E3")));