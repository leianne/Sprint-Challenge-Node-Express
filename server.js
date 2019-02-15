const express = require('express');
const server = express();
const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');
server.use(express.json())

server.use('/api/actions', actionRoutes)
server.use('/api/projects', projectRoutes)


module.exports = server;