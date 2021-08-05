'use strict';

const server = require('./server');
const config = require('./config');

const main = async () => {
  let a;
  try {
    a = await server.start(config)
  } catch (err) {
    throw new Error(err)
  }
}

main();
