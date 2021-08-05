'use strict';

const Promise = require('bluebird');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const start = (config) => {
  return new Promise((resolve, reject) => {
    if (!config.server) {
      reject(new Error('No config for server'));
    }
    const app = express();

    app.use(logger('common', config.logger));
    app.use(express.json());
    app.use(helmet());

    app.get('/', (req, res) => {
      res.send('Hello, World!');
    })

    app.listen(config.server.port, (err) => {
      if (err) {
        reject(new Error(err));
      }

      console.log(`🐳Service shipped at ${config.server.host}:${config.server.port}...`);
      resolve(app);
    });
  })
}

module.exports = {
  start
}