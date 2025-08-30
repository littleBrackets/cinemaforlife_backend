const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_episode } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_episode.create({
    tconst: "tt999",
    parentTconst: "tt123",
    seasonNumber: 1,
    episodeNumber: 1
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Episodes API - Integration", () => {
  it("should fetch episodes by parent id", async () => {
    const res = await request(app).get("/api/episodes/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].seasonNumber).toBe(1);
  });

  it("should return empty array if no episodes found", async () => {
    const res = await request(app).get("/api/episodes/tt999");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
  });
});
