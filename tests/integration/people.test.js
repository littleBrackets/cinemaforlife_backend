const request = require("supertest");
const app = require("../../src/app");
const { sequelize, name_basics, title_basics } = require("../../src/models");

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Insert mock movies (so knownForTitles has real data)
  await title_basics.bulkCreate([
    { tconst: "tt001", primaryTitle: "Mock Movie 1", startYear: 1990, titleType: "movie" },
    { tconst: "tt002", primaryTitle: "Mock Movie 2", startYear: 1995, titleType: "movie" }
  ]);

  // Insert mock person with knownForTitles
  await name_basics.create({
    nconst: "nm001",
    primaryName: "John Doe",
    birthYear: 1970,
    deathYear: null,
    primaryProfession: "actor",
    knownForTitles: "tt001,tt002"
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("People API - Integration", () => {
  it("should fetch person by id with knownFor titles expanded", async () => {
    const res = await request(app).get("/api/people/nm001");
    expect(res.statusCode).toBe(200);

    expect(res.body.primaryName).toBe("John Doe");

    // knownFor should contain expanded movie objects
    expect(res.body.knownFor).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ tconst: "tt001", primaryTitle: "Mock Movie 1" }),
        expect.objectContaining({ tconst: "tt002", primaryTitle: "Mock Movie 2" })
      ])
    );
  });

  it("should return 404 if person not found", async () => {
    const res = await request(app).get("/api/people/nm999");
    expect(res.statusCode).toBe(404);
  });
});
