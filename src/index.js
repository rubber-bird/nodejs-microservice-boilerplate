'use strict';

const server = require('./server');
const config = require('./config');

const main = async () => {
  let app;
  try {
    app = await server.start(config)
  } catch (err) {
    throw new Error(err)
  }
}

main();
