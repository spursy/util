const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

var server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader('Content-Type', "text/plain");
    
    // for(var i = 0; i <= 100; i ++) {
    //     var student = {
    //         name: `I am ${i}`,
    //         age: `I am ${i} years`
    //     }
    //      res.write(`${JSON.stringify(student)}` );
    // } 

    setInterval(function() {
        var student = {
            name: `I am `,
            age: `I am years`
        }

        res.write(`${JSON.stringify(student)}` );
    }, 500)
    res.write('\n');
    // res.end(`END` );
   
    // res.end('Hello world!');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname} : ${port}`);
});

server.on('error', function(e) {
    console.log(`error message is ${e.message}`);
})