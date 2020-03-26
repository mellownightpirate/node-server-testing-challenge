const db = require("../dbConfig");

module.exports = {
  getAllCharacters,
  addNewCharacter,
  removeCharacter
};

async function getAllCharacters() {
  return db("characters");
}

async function addNewCharacter(character) {
  const [id] = await db("characters").insert(character);
  return db("characters")
    .where({ id })
    .first();
}

async function removeCharacter(id) {
  return db("characters")
    .where({ id })
    .del();
}
