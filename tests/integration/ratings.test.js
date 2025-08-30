const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_ratings } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_ratings.create({
    tconst: "tt123",
    averageRating: 8.5,
    numVotes: 1000
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Ratings API - Integration", () => {
  it("should fetch ratings by movie id", async () => {
    const res = await request(app).get("/api/ratings/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body.averageRating).toBe(8.5);
  });

  it("should return 404 if rating not found", async () => {
    const res = await request(app).get("/api/ratings/tt999");
    expect(res.statusCode).toBe(404);
  });
});
