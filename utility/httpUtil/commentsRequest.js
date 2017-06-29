const querystring = require('querystring');
const http = require('http');

const postData = querystring.stringify({
    'respUser': '58d8834f0ce46300570d3582',
    'targetId': '5953db51f265da6c415f0731',
    'targetType': 'entry',
    'content' : '受益匪浅'
})

var options = {
    hostname: 'https://comment-wrapper-ms.juejin.im',
    port: 80,
    path: '/v1/comment',
    method: 'POST',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded',
        'Host':'comment-wrapper-ms.juejin.im',
        'Origin':'https://juejin.im',
        'Referer':'https://juejin.im/post/5946784461ff4b006cf1d8ec',
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'X-Juejin-Client':'1498663484457',
        'X-Juejin-Src':'web',
        'X-Juejin-Token':'eyJhY2Nlc3NfdG9rZW4iOiIwVXJBVkl2MHo2OUxpY1JWIiwicmVmcmVzaF90b2tlbiI6IkNEV2RrTmRBMlZwNnBwR1ciLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjo2MDQ4MDB9',
        'X-Juejin-Uid':'57fd14f467f356005888dbd2'
    }
}

var req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);    
    });
})

req.on('end', function() {
    console.log('评论完毕！');
})

req.on('error', function(e) {
    console.log('Error: ' + e.message);
})

req.write(postData);
req.end();