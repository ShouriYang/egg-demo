'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  //新的action
  async new() {
    const { ctx } = this;
    ctx.body = '这是一个new.html'
  }
}

module.exports = HomeController;
