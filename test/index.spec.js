'use strict';

const supertest = require('supertest');
const app = require('../src/server');
const config = {
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
let a;

beforeEach(async () => {
  a = await app.start(config)
  // console.log(a)
})

test('GET', async () => {
  await supertest(a).get("/").expect(200)
    .then((response) => {
      expect(response.text).toBe("ms");
    })
})

afterEach(() => {

})