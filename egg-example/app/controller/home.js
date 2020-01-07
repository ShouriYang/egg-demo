'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await app.mysql.select('article');
    console.log(res);
    // ctx.csrf是用户访问页面生成的密钥
    await ctx.render('home');
    // ctx.body = 'hi, egg';
  }
  async cookieIndex() {
    const { ctx, app } = this;
    // ctx.cookies.set('username', 'shouriyang', {
    //   maxAge: 1000 * 3600 * 24, // cookie存储一天 设置过期时间
    //   httpOnly: true, // 不能在前端通过js获取
    //   signed: true, // 对cookie进行签名,防止用户修改cookie
    //   encrypt: true, // 是否对cookie进行加密 如果cookie加密那么获取的时候要对cookie进行解密操作
    // });
    ctx.session.username = 'shouriyang';
    await ctx.render('cookiehome');
  }
  // 接收post提交的数据
  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);

  }
}

module.exports = HomeController;
