const { getAkasByTitle } = require("../../src/services/akaService");
const { title_akas } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_akas: { findAll: jest.fn() }
}));

describe("Akas Service - Unit", () => {
  it("should return alternate titles", async () => {
    title_akas.findAll.mockResolvedValue([{ titleid: "tt123", title: "Alt Title" }]);
    const result = await getAkasByTitle("tt123");
    expect(result[0].title).toBe("Alt Title");
  });
});
