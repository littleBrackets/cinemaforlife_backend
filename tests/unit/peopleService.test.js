const { getPersonById } = require("../../src/services/peopleService");
const { name_basics } = require("../../src/models");

jest.mock("../../src/models", () => ({
  name_basics: { findByPk: jest.fn() }
}));

describe("People Service - Unit", () => {
  it("should return a person", async () => {
    name_basics.findByPk.mockResolvedValue({ nconst: "nm123", primaryName: "Test Actor" });
    const result = await getPersonById("nm123");
    expect(result.primaryName).toBe("Test Actor");
  });

  it("should return null if not found", async () => {
    name_basics.findByPk.mockResolvedValue(null);
    const result = await getPersonById("nm999");
    expect(result).toBeNull();
  });
});
