'use strict';

const Promise = require('bluebird');
const express = require('express');


const main = (server) => {
  return new Promise((resolve, reject) => {
    if (!server) {
      reject(new Error('No config for server'));
    }
    const app = express();

    app.get('/', (req, res) => {
      res.send('ms')
    })

    app.listen(config.server.port, (err) => {
      if (err) {
        reject(new Error(err));
      }

      resolve(app);
    });
  })
}

module.exports = {
  main
}