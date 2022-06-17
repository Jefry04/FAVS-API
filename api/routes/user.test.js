const req = require("supertest");
const { connect, disconected, cleanup } = require ("../db");
const app = require ("../app");
const { disconnect } = require("mongoose");

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

  it ("should create a user", async () =>{
    const user = {
        email:"correo@correo.com",
        password:"Clave123*",
        confirmPassword: "Clave123*"
    }
    const res = await req(app).post("/auth/local/signup").send(user);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token")
  });
});