'use strict';
module.exports = (options, app) => {
  return async function forbidIp(ctx, next) {
    // 要屏蔽的ip:从参数传入
    const forbidips = options.forbidips;
    // 获取客户端的ip
    const clientIp = ctx.request.ip;
    // 屏蔽ip
    if (forbidips.indexOf(clientIp) !== -1) {
      ctx.status = 403;
      ctx.body = '您的ip已经被屏蔽';
    } else {
      await next();
    }
  };
};
// module.exports = (options, app) => {
//   return async function forbidIp(ctx, next) {
//     // 要屏蔽的ip 1.从数据库获取 2.从参数传入
//     const forbidip = '127.0.0.1';
//     // 获取客户端的ip
//     console.log(ctx.request.ip);
//     // 屏蔽ip
//     if (ctx.request.ip === forbidip) {
//       ctx.status = 403;
//     } else {
//       await next();
//     }
//   };
// };
