var net = require('net');
var server = net.createServer(function(client) {
    // client.setNoDelay(true);
    client.write('1231231231231','binary');

    console.log('server connected');
    client.on('end', function() {
        console.log('Server disconnected');
        server.unref();
    })
    client.on('data', function(data) {
        process.stdout.write(data.toString());
        client.write(data.toString());
    })
})

server.listen(8000, function() {
    console.log('Server bound');
});