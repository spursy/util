const http = require('http');

const server = http.createServer((req, res) => {
    let body = ''
    req.setEncoding('utf-8')
    req.on('data', (chunk) => {
        console.log(`${chunk} 123`);
        body += chunk;
    })

    req.on('end', () => {
        try {
            console.log(body + 12312)
            var result = JSON.parse(body)
            res.write(typeof result)
            res.end()
        } catch(e) {
            res.statusCode = 404
            return res.end(`Error is ${e.message}`)
        }
    })
})

server.listen(8080)