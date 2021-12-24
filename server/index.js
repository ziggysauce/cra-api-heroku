const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', async (req, res) => {
  res.status(200).json({ data: 'Server is connected!' });
});

app.get('/api', async (req, res) => {
  res.status(200).json({ data: [{num: 1}, {num: 2}, {num: 3}] });
});

app.listen(process.env.PORT || 3000);

console.log(`API server is listening on port:${process.env.PORT || 3000}`);