const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

console.log("Changes are made here")
console.log("New Changes are made here")
server.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});