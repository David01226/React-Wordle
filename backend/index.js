require('dotenv').config()
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001
const cors = require('cors');

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('connected to json server listening on', port)
})