const clonServer = require("supertest");
const req = require("supertest");
const { connect, disconected, cleanup } = require("../db");
const User = require("../models/user.model");
const app = require("../app");

describe("App", () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await disconected();
  });

  it("should create a user", async () => {
    const user = {
      email: "correo@correo.com",
      password: "Clave123*",
      confirmPassword: "Clave123*",
    };
    const res = await clonServer(app).post("/auth/local/signup").send(user);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("should not create user when there is no email", async () => {
    const user = { password: "Clave123*", confirmPassword: "Clave123*" };
    const res = await clonServer(app).post("/auth/local/signup").send(user);

    expect(res.statusCode).toBe(400);
  });

  // it ("should login successfully ", async () =>{
  //   const user = { email: "test@test.com", password: "Clave123*" };
  //   await User.create(user);
  //   const res = await clonServer(app).post("/auth/local/login").send(user);

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body).toHaveProperty("token");
  // });
});
