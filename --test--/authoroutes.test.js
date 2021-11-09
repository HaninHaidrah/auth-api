"use strict";

const supertest = require("supertest");
const { server } = require("../src/server");
const { db } = require("../src/models/index");
const mockRequest = supertest(server);

beforeAll(async (done) => {
  await db.sync();
  done();
});

afterAll(async (done) => {
  await db.drop();
  done();
});

describe("auth routes", () => {
  it("can creat new record when sign up", async () => {
    const respond = await mockRequest.post("/signup").send({
      username: "haanin",
      password: "123456",
      role: "admin",
    });
    expect(respond.status).toBe(201);
  });

  //POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client

  it("can sign in usingbasicAuth", async () => {
    await mockRequest.post("/signup").send({
      username: "haanin",
      password: "123456",
      role: "admin"
    });
    const respond = await mockRequest.post("/signin").auth("haanin", "123456");
    expect(respond.status).toBe(200);
  });

  //POST /api/v1/:model adds an item to the DB and returns an object with the added item
  // it("can add items to DB ", async () => {
  //   const respond = await mockRequest.post("/api/v1/food").send({
  //     name: "apple",
  //     calories: "100",
  //     type: "fruit"
  //   });
  //   expect(respond.status).toBe(201);
  // });
  // it("can add items to DB ", async () => {
  //   const respond = await mockRequest.post("/api/v1/:model").send({
  //     name: "apple",
  //     calories: "100",
  //     type: "fruit",
  //   });
  //   expect(respond.status).toBe(200);
  // });
});
