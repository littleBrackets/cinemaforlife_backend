const { getCrewById } = require("../../src/services/crewService");
const { title_crew } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_crew: { findByPk: jest.fn() }
}));

describe("Crew Service - Unit", () => {
  it("should return crew info", async () => {
    title_crew.findByPk.mockResolvedValue({ tconst: "tt123", directors: "nm001" });
    const result = await getCrewById("tt123");
    expect(result.directors).toBe("nm001");
  });
});
