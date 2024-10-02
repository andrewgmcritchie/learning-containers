var http = require("http");
console.log('Starting Server');
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World from Containers\n');
}).listen(8888);
