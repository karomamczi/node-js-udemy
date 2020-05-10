const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('Users middleware');
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Root middleware');
  res.send('<h1>Hello there!</h1>');
});

app.listen(3000);
