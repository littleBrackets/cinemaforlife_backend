const { getMovieById } = require("../../src/services/movieService");
const { title_basics } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_basics: { findByPk: jest.fn() }
}));

describe("Movie Service - Unit", () => {
  it("should return a movie", async () => {
    title_basics.findByPk.mockResolvedValue({ tconst: "tt123", primaryTitle: "Test Movie" });

    const result = await getMovieById("tt123");

    expect(title_basics.findByPk).toHaveBeenCalledWith("tt123");
    expect(result.primaryTitle).toBe("Test Movie");
  });

  it("should return null if movie not found", async () => {
    title_basics.findByPk.mockResolvedValue(null);

    const result = await getMovieById("tt999");

    expect(result).toBeNull();
  });
});
