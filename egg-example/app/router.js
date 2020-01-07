'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/cookiehome', controller.home.cookieIndex);
  router.get('/cookienews', controller.news.cookieNews);
  router.post('/add', controller.home.add);
  router.get('/news', controller.news.index);
  router.get('/newsContent', controller.news.content);
  router.post('/article/create', controller.article.create);
};
