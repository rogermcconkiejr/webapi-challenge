const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's Do the Sprint challenge!</h2>`)
});

module.exports = server;