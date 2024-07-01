const http = require('http');
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {
    if(req.url === '/login'){
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Node.js Class</title></head><body>');
        res.write('<h1>Hello, World!</h1>');
        res.write('</body></html>');
        res.end();
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});

// server.listen('/login', )