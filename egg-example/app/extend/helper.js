'use strict';
// 在扩展里面引入第三方模块
const sd = require('silly-datetime');
module.exports = {
  formatTime(param) {
    // this是helper对象，在其中可以调用其他的helper方法
    // 格式化日期 param 时间戳
    return sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
  },
};
