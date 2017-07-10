function thunkify(fn) {

  // thunkify 直接返回就是数组
  return function() {
    // 收集arguments 的参数，保存在临时数组中。
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;
      // 将回调函数加载到上一级收集的参数数组的末尾。
      args.push(function () {
        // 确保回掉函数只会被加载一次。
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
        // fn(args);
      } catch (err) {
        done(err);
      }
    }
  }
};

var fs = require('fs');
var read = thunkify(fs.readFile);
read('package.json', 'utf8')(function(err, str){
});