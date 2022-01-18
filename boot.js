const http = require("http");

const banner = require("./banner");
const dispach = require("./dispach");
const config = require("./constant");

http.createServer((request, response) => {
    dispach.doDispach(request, response);
}).listen(config.serverPort);

console.log("Server started successfully！！！");
console.log(banner.banner);
