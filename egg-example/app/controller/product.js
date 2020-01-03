'use strict';
const Controller = require('egg').Controller;
class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '商品列表';
    await ctx.render('product/index.ejs', {
      title: '我是标题',
      list: [
        {
          id: 1,
          name: 'IPhone 11',
        },
        {
          id: 2,
          name: 'shouriyang',
        },
      ],
      htmlTags: `
        <div> <h2>这是一个h2标签</h2></div>
      `,
    });
  }
}
module.exports = ProductController;
