// Express to run server and routes
const HTTP = require("http");
const server = HTTP.createServer((req, res) => {
  res.end("hi from server side");
});

server.listen(3000, "127.0.0.0", () => {
  console.log("xxx");
});
