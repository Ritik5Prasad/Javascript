const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const cpu = require('os').cpus();

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // Workers can share any TCP connection
    // In this case, it's an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);
    console.log(`Worker ${process.pid} started`);
}
console.log(cpu)
