const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify(
    {
        mes: "Hello World"
    }
)

const options = {
    hostname: "www.baidu.com", 
    port: 80,
    path: 'upload',
    method: 'POST',

};

const req = http.request(options, (res) => {
    console.log(`status code: ${res.statusCode}`);
    console.log(`response header: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');  
    res.on('data', (chunk) => {
        console.log(`response body: ${chunk}`);
    })
    res.on('end', () => {
        console.log('no pending request data.');
    })
});

req.on('error', (e) => {
    console.error(`error log ${e.message}`);
});

req.write(postData);
req.end();