'use strict';
const { Service } = require('egg');
class ProductService extends Service {
  async list() {
    const data = await this.app.model.Product.find({});
    return data;
  }
  // async save(data) {
  //   const model = new this.app.model.Product(data);
  //   await model.save();
  //   return model;
  // }
}

module.exports = ProductService;
