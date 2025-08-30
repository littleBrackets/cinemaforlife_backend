const { getRatingByMovie } = require("../../src/services/ratingsService");
const { title_ratings } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_ratings: { findByPk: jest.fn() }
}));

describe("Ratings Service - Unit", () => {
  it("should return movie rating", async () => {
    title_ratings.findByPk.mockResolvedValue({ tconst: "tt123", averageRating: 9.0 });
    const result = await getRatingByMovie("tt123");
    expect(result.averageRating).toBe(9.0);
  });
});
