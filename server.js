const express = require('express');
const server = express();
const projectRoutes = require('./routes/projectRoutes');

server.use('/api/projects', projectRoutes)

module.exports = server;