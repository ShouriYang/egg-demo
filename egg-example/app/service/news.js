'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    const res = await this.ctx.curl(url);
    return JSON.parse(res.data).result;

  }
  // 获取新闻详情
  async getNewsConetnt(aid) {
    // 通过抓取接口返回数据
    const api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    console.log(aid);
    const res = await this.ctx.curl(api);
    // console.log(JSON.parse(res.data).result);
    return JSON.parse(res.data).result;

  }
}

module.exports = NewsService;
