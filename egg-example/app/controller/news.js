'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '新闻系统';
    const list = await this.service.news.getNewsList();
    await ctx.render('news', {
      list,
    });
  }
  async content() {
    const { ctx } = this;
    const aid = ctx.query.aid;
    // console.log(aid);
    const list = await this.service.news.getNewsConetnt(aid);
    console.log(list);
    await ctx.render('newsContent', {
      list: list[0],
    });
  }
  async cookieNews() {
    const { ctx } = this;
    // const userInfo = ctx.cookies.get('username', {
    //   encrypt: true,
    // });
    const userInfo = ctx.session.username;
    await this.ctx.render('cookienews', {
      username: userInfo,
    });
  }
}

module.exports = NewsController;
