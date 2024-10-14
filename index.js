const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set response header content type
    res.setHeader('Content-Type', 'text/plain');

    // Define basic routes
    if (req.url === '/' && req.method === 'GET') {
        const statusCode = 200;
        res.writeHead(statusCode);
        res.end(`Status: ${statusCode}\nWelcome to the vvv Node.js HTTP Server, Danies!`);
    } else if (req.url === '/about' && req.method === 'GET') {
        const statusCode = 200;
        res.writeHead(statusCode);
        res.end(`Status: ${statusCode}\nThis is the About Page.`);
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            const statusCode = 200;
            res.writeHead(statusCode);
            res.end(`Status: ${statusCode}\nReceived Data: ${body}`);
        });
    } else {
        const statusCode = 404;
        res.writeHead(statusCode);
        res.end(`Status: ${statusCode}\n404 Not Found`);
    }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
