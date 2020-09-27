/*
 * @Author: wy
 * @LastEditors: Please set LastEditors
 * @Description: 错误处理
 */
import log from "../config/log";
const errorHandle = {
  error(app) {
    app.use(async (ctx, next) => {
      const start = new Date();
      try {
        await next();
        const ms = new Date() - start;
        log.logResponse(ctx, ms);
      } catch (error) {
        console.log("error...", error);
        const ms = new Date() - start;
        log.logError(ctx, error, ms);
        ctx.response.body = {
          code: 500,
          data: "",
          msg: error.message,
        };
      }
    });
    // app.use(async (ctx, next) => {
    //   await next();
    //   if (404 != ctx.status) return;
    //   ctx.body =
    //     '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    // });
  },
};
export default errorHandle;
