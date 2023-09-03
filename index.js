const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

console.log("Changes are made here")
console.log("New Changes are made here")

console.log("I want to add a new line")
console.log("Adding a new to check")
server.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});