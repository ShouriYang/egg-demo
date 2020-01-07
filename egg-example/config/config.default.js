/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578048882392_5077';

  // add your middleware config here
  config.middleware = [ 'printdate', 'forbidip', 'auth' ];
  config.forbidip = {
    forbidips: [
      '192.168.1.109',
    ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置模版引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // config/config.${env}.js
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'egg_article',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // config.security = {
  //   csrf: {
  //     enable: false,
  //   },
  // };

  // 配置session
  config.session = {
    key: 'shourisession',
    maxAge: 2000,
    httpOnly: true,
    encrypy: true,
    renew: true, // 每次访问页面的时候，session都会被延期
  };
  config.api = 'http://www.phonegap100.com/';

  return {
    ...config,
    ...userConfig,
  };
};
