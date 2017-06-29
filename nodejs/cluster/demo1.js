const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus.length;

if (cluster.isMaster) {
    console.log(`main thread ${process.pid} is running.`);
    for(let i = 0; i < numCPUs; i ++) {
        cluster.fork();
    }

    console.log(`cpu number is ${numCPUs}`);
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Process thread ${process.pid} was outed.`);
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello word!");
    }).listen(8000);

    console.log(`work process ${process.pid} is started.`);
}

