const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_basics } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_basics.create({
    tconst: "tt123",
    titleType: "movie",
    primaryTitle: "Integration Test Movie",
    startYear: "2024"
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Movies API - Integration", () => {
  it("should fetch all movies", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].primaryTitle).toBe("Integration Test Movie");
  });

  it("should fetch a single movie", async () => {
    const res = await request(app).get("/api/movies/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body.primaryTitle).toBe("Integration Test Movie");
  });

  it("should return 404 for non-existent movie", async () => {
    const res = await request(app).get("/api/movies/tt999");
    expect(res.statusCode).toBe(404);
  });
});
