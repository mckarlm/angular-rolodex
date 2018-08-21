const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 4020;
const server = express();

server.use(bodyparser.json());

server.use('/api', routes);

server.get('/', (req, res) => {
  res.send('Wiggity woo')
});

server.get('*', (req, res) => {
  return res.status(404).json({ message: `Unable to fulfill request for ${req.originalUrl} `});
});

server.listen(PORT, () => {
  console.log(`Connected via port ${PORT}`);
});