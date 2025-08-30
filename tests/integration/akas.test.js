const request = require("supertest");
const app = require("../../src/app");
const { sequelize, title_akas } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await title_akas.create({
    titleid: "tt123",
    ordering: 1,
    title: "Alt Title",
    region: "US",
    language: "en",
    types: null,
    attributes: null,
    isoriginaltitle: false
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Akas API - Integration", () => {
  it("should fetch akas by title id", async () => {
    const res = await request(app).get("/api/akas/tt123");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe("Alt Title");
  });

  it("should return empty array if no akas found", async () => {
    const res = await request(app).get("/api/akas/tt999");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(0);
  });
});
