'use strict';
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    // 配置模版的全局变量
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};
