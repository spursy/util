const spawn = require('child_process').spawn;
const process = require('process');

const p = spawn('node', ['b']);
// console.log(process.pid, p.pid);

p.stdout.on('data',function (data) {
    console.log(`data processed done.`);
    console.log('stdout: ' + data);
});

p.stderr.on('error', function (data) {
    console.log(`data`);
})