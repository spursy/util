const http = require('http');
const port = 4000;
const hostname = '127.0.0.1';



var server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader('Content-Type', "text/plain");
    
    var students = [];
    printOnPage();
    function printOnPage() {
        // set internal timer. 
        setInterval(function() {
            var student = {
                name: `Spursyy`,
                age: `18 years old`
            }
            // use peocess memoey usage as reponse result.
            res.write(`${JSON.stringify(process.memoryUsage())}` );
            process.nextTick(printOnPage);
        }, 500)
    }
   
    res.write('\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});

server.on('error', function(e) {
    console.log(`error message is ${e.message}`);
})