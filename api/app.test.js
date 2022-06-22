const req = require("supertest");
const { connect, disconected, cleanup } = require ("./db");
const app = require ("./app");

describe ("App", () => {
  beforeAll(async () => {
    await connect();
  })

  beforeEach(async () => {
    await cleanup();
  })

  afterAll (async () =>{
    await disconected();
  })

  it ("should app", async () =>{
    expect(true).toBeTruthy();
  });
});