/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 日志打印
 */
import log4js from "log4js";
// import path from "path";
import chalk from "chalk";
const errorLogger = log4js.getLogger("errorLogger");
const responseLogger = log4js.getLogger("responseLogger");
log4js.configure({
  appenders: {
    errorLogger: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log", //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      filename: "dist/logs/error.log", //生成文件路径和文件名
    },
    responseLogger: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log", //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      filename: "dist/logs/response.log", //生成文件路径和文件名
    },
    out: {
      type: "console",
    },
  },
  categories: {
    default: { appenders: ["out"], level: "info" },
    // responseLogger: { appenders: ["responseLogger"], level: "all" },
    errorLogger: { appenders: ["errorLogger"], level: "error" },
  },
});
const log = {
  logError: (ctx, error, resTime) => {
    if (ctx && error) errorLogger.error(formatError(ctx, error, resTime));
  },
  logResponse: (ctx, resTime) => {
    if (ctx) responseLogger.info(formatResponse(ctx, resTime));
  },
};
let formatResponse = (ctx, resTime) => {
  let logText = "";
  logText += `\n******** response log start ********\n`;
  logText += formatReqLog(ctx.request, resTime);
  logText += `response status: ${ctx.status} \n`;
  logText += `backEnd params:${chalk.green(JSON.stringify(ctx.write))}\n`;
  logText += `response body: ${chalk.yellow(JSON.stringify(ctx.body))} \n`;
  logText += `\n******** response log end ********\n`;
  return logText;
};
let formatError = (ctx, error, resTime) => {
  let logText = "";
  logText += ` \n******** error log start ********\n`;
  logText += formatReqLog(ctx.request, resTime);
  logText += `error name:${error.name}\n`;
  logText += `error message:${error.message}\n`;
  logText += `error stack:${error.stack}\n`;
  logText += `\n******** error log end ********\n`;
  return logText;
};
let formatReqLog = (request, resTime) => {
  let logText = "";
  let method = request.method;
  logText += `request method: ${method} \n`;
  logText += `request url:${request.originalUrl}\n`;
  logText += `request client ip:${request.ip}\n`;
  if (method === "GET") {
    logText += `frontEnd request query:${chalk.green(JSON.stringify(request.query))}\n`;
  } else {
    if (Object.keys(request.query).length) {
      // console.log(chalk.red(JSON.stringify(request.query)));
      logText += `frontEnd request query:${chalk.green(JSON.stringify(request.query))}\n`;
    } else {
      // console.log(chalk.red(JSON.stringify(request.body)));
      logText += `frontEnd request body:${chalk.green(JSON.stringify(request.body))}\n`;
    }
  }
  logText += `resquest header authorization:${request.header.authorization}\n`;
  logText += `response time:${resTime}\n`;
  return logText;
};
export default log;
