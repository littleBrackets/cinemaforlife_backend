const { getPrincipalsByMovie } = require("../../src/services/principalService");
const { title_principals } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_principals: { findAll: jest.fn() }
}));

describe("Principals Service - Unit", () => {
  it("should return principals list", async () => {
    title_principals.findAll.mockResolvedValue([{ tconst: "tt123", nconst: "nm001", category: "actor" }]);
    const result = await getPrincipalsByMovie("tt123");
    expect(result[0].category).toBe("actor");
  });
});
