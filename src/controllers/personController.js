const { fetchAllPeople, fetchPersonById } = require("../services/personService");

const getAllPeople = async (req, res) => {
  try {
    const people = await fetchAllPeople();
    res.json(people);
  } catch (err) {
    console.error("❌ Error fetching people:", err);
    res.status(500).json({ error: "Failed to fetch people" });
  }
};

const getPersonById = async (req, res) => {
  try {
    const person = await fetchPersonById(req.params.id);
    if (!person) return res.status(404).json({ error: "Person not found" });
    // knownForTitles is a comma-separated string
    let knownFor = [];
    if (person.knownForTitles) {
      const ids = person.knownForTitles.split(",");
      knownFor = await title_basics.findAll({
        where: { tconst: ids },
        attributes: ["tconst", "primarytitle", "startyear", "titletype"]
      });
    }
    res.json({
      ...person.toJSON(),
      knownFor // attach full title info
    });
  } catch (err) {
    console.error("❌ Error fetching person:", err);
    res.status(500).json({ error: "Failed to fetch person" });
  }
};

module.exports = { getAllPeople, getPersonById };
