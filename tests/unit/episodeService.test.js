const { getEpisodesByParent } = require("../../src/services/episodeService");
const { title_episode } = require("../../src/models");

jest.mock("../../src/models", () => ({
  title_episode: { findAll: jest.fn() }
}));

describe("Episode Service - Unit", () => {
  it("should return episodes for a parent", async () => {
    title_episode.findAll.mockResolvedValue([{ tconst: "tt999", seasonNumber: 1, episodeNumber: 1 }]);
    const result = await getEpisodesByParent("tt123");
    expect(result[0].seasonNumber).toBe(1);
  });
});
