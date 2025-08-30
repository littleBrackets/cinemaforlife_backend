const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_crew } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_crew.create({
    tconst: "tt123",
    directors: "nm001,nm002",
    writers: "nm003"
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Crew API - Integration", () => {
  it("should fetch crew by movie id", async () => {
    const res = await request(app).get("/api/crew/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body.directors).toContain("nm001");
  });

  it("should return 404 if crew not found", async () => {
    const res = await request(app).get("/api/crew/tt999");
    expect(res.statusCode).toBe(404);
  });
});
