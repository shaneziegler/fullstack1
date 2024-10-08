const { test, after } = require("node:test");
// import { test, after } from "node:test";
const supertest = require("supertest");
// import supertest from "supertest";
const app = require("../app.ts");
// import app from "../app.ts";

const api = supertest(app);

test("median prime numbers are returned as json", async () => {
  await api
    .get("/api/10")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

// test("there are two median prime numbers", async () => {
//   const response = await api.get("/api/10");

//   // assert.strictEqual(response.body.length, 2)
//   const contents = response.body.map((e) => e.medianPrimes);
//   // assert.strictEqual(contents.includes(3), true);
//   assert(contents.includes(3));
// });
