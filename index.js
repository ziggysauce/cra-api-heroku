const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const { SERVER_PORT = 3001 } = process.env;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', async (req, res) => {
  res.status(200).json({ data: 'Server is connected!' });
});

app.get('/api', async (req, res) => {
  res.status(200).json({ data: [{num: 1}, {num: 2}, {num: 3}] });
});

app.listen(SERVER_PORT);

console.log(`API server is listening on port:${SERVER_PORT}`);