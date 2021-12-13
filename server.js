const express = require('express');
const moment = require('moment');
const cors = require('cors');
const fs = require('fs/promises');

const contactsRouter = require('./src/routes/contacts.js');

const server = express();

// CORS
server.use(cors());

// middleware:
server.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format('DD-MM-YYYY_hh:mm:ss');
  const string = `\n ${method} ${url} ${date}`;
  await fs.appendFile('server.log', string);
  next();
});

// handle requests:
server.use('/contacts', contactsRouter);

// handle 404:
server.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

// run server:
server.listen(3030, () => console.log('Server is running on port 3030'));
