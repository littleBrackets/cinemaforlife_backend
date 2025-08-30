const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_principals } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_principals.create({
    tconst: "tt123",
    ordering: 1,
    nconst: "nm001",
    category: "actor",
    job: null,
    characters: "['Hero']"
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Principals API - Integration", () => {
  it("should fetch principals by movie id", async () => {
    const res = await request(app).get("/api/principals/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].nconst).toBe("nm001");
  });

  it("should return empty array if no principals", async () => {
    const res = await request(app).get("/api/principals/tt999");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
  });
});
