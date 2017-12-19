var http = require('http'),
    fs = require('fs'),
    server = http.createServer();

server.on('request', function(request, response) {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader('Content-Type', 'text/html', 'utf-8');
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./error.jpg', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});
server.listen(8080);