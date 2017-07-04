const http = require('http');
const port = 4000;
const hostname = '127.0.0.1';



var server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader('Content-Type', "text/plain");
    
    // var students = [];
    // printOnPage();
    // function printOnPage() {
    //     // set internal timer. 
    //     setInterval(function() {
    //         var student = {
    //             name: `Spursyy`,
    //             age: `18 years old`
    //         }
    //         // use peocess memoey usage as reponse result.
    //         res.write(`${JSON.stringify(process.memoryUsage())}` );
    //         process.nextTick(printOnPage);
    //     }, 500)
    // }

    function forLoops(i) {
//   console.log('\n');
  console.log(`${i}`);
//   console.log(`${JSON.stringify(process.memoryUsage())}` );
  if(i<10000000)
  {
    var site = {};
    site.name = 'IT笔录';
    site.domain = 'itbilu.com';

    // 这里是一个保存或更新等操作
    setTimeout(()=>{
	  console.log(i, site);
    }, 0)
    // console.log(`${JSON.stringify(process.memoryUsage())}` );
    // console.log('\n');
    res.write(`${JSON.stringify(process.memoryUsage())}` );
    process.nextTick(forLoops, i+=1);
    //  forLoops(i+=1);
  }

  forLoops(0);
}
   
    res.write('\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});

server.on('error', function(e) {
    console.log(`error message is ${e.message}`);
})