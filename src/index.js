'use strict';

const server = require('./server');
const config = require('./config');

let a;
try {
  a = server.main(config)
} catch (err) {
  throw new Error(err)
}
