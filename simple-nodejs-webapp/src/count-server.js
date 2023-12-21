const http = require("http");

const host = '0.0.0.0';
const port = 8080;

const application_instance = process.env.APPLICATION_INSTANCE 

let current_count = 0;

const requestListener = function (req, res) {
    console.log(`Processing ${req.url}`);
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case `/${application_instance}/increment`:
            current_count++;
            res.writeHead(200);
            break
        case `/${application_instance}/decrement`:
            if (current_count > 0) {
                current_count--;
                res.writeHead(200);
            } else {
                res.writeHead(409);
            }
            break
        case `/${application_instance}/health`:
            res.writeHead(200);
            break;
        default:
            res.writeHead(404);
    }
    res.end(`{"instance": "${application_instance}", "count": ${current_count}}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
