'use strict';

const app = require('./app');
const server = app.listen(3000);

server.on('listening', () =>
    console.log('server started listening on http://localhost:3000'));