'use strict';
// 外部可以通过 this.app.foo()来访问
module.exports = {
  foo(param) {
    console.log(param);
  },
};
