var cp = require('child_process');

cp.execFile('echo', ['hello word'], function (err, stdout, stderr) {
    if (err) console.log('err::' + err);
    console.log('stdout:::' + stdout);
    console.log('stderr:::' + stderr);
})