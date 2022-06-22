const clonServer = require("supertest");
const jwt = require("jsonwebtoken");
const { connect, disconected, cleanup } = require("../db");
const app = require("../app");
const User = require("../models/user.model");

describe("App", () => {
  let user;
  let token;
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();

    const data = { email: "test@test.com", password: "Clave123*" };

    user = await User.create(data);
    token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 365,
    });
  });

  afterAll(async () => {
    await disconected();
  });

  it("should not create list of fav if user is not authenticated", async () => {
    const list = {
      title: "pelicula1",
      description: "buena pelicula",
      link: "http...",
    };
    const res = await clonServer(app).post("/favs").send(list);

    expect(res.statusCode).toBe(401);
  });

  it("should create list if user is authenticated", async () => {
    const list = {
      name: "usuario 3",
      fav: [
        {
          title: "pelicula1",
          description: "buena pelicula",
          link: "http..."
        }]
    };
    const res = await clonServer(app)
      .post("/favs")
      .send(list)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(list.name);
  });
});
