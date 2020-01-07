'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = app.mysql.insert('article', params);
      console.log(params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ArticleService;
