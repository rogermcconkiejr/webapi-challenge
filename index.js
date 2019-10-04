const express = require('express');
const server = require('./server.js');
const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');

server.use(express.json());

server.use('/actions', actionsRouter)
server.use('/projects', projectsRouter)

const port = 7979

server.listen(port, ()=>{
    console.log(`\n* server running on http://localhost:${port} *\n`);
})