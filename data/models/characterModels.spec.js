const db = require("../dbConfig");
const Characters = require("./characterModels");

beforeEach(async () => {
  await db("characters").truncate();
});

describe("characterModel.js module", () => {
    describe("addNewCharacter()", () => {
      it("inserts a new character to the db", async () => {
        Characters.addNewCharacter({ name: "The Mandalorian", location: "Mandalore" });
        const characters = await db("characters");
        expect(characters).toHaveLength(1);
      });
  
    });
  
    describe("getAllCharacters()", () => {
      it("returns an array of characters from the db", async () => {
        await db("characters").insert({ name: "Bobba Fett", location: "Kamino" });
        const characters = await Characters.getAllCharacters();
        expect(characters).toHaveLength(1);
      });
  
      it("returns an object containing a name attribute", async () => {
        await db("characters").insert({ name: "Bobba Fett", location: "Kamino" });
        const characters = await Characters.getAllCharacters();
        expect(characters).toMatchObject([{ name: "Bobba Fett" }]);
      });
    });
  
    describe("removeCharacter()", () => {
      it("returns truthy if the character is removed from the db", async () => {
        await db("characters").insert({ name: "Bobba Fett", location: "Kamino" });
        await db("characters").insert({ name: "Luke Skywalker", location: "Tatooine" });
        const characterRemoved = await Characters.removeCharacter(2);
        expect(characterRemoved).toBeTruthy();
      });
  
      it("the db length is updated correctly", async () => {
        await db("characters").insert({ name: "Bobba Fett", location: "Kamino" });
        await db("characters").insert({ name: "Luke Skywalker", location: "Tatooine" });
        await db("characters").insert({ name: "Darth Vader", location: "Death Star" });
        let characters;
        characters = await db("characters");
        expect(characters).toHaveLength(3);
        await Characters.removeCharacter(3);
        characters = await db("characters");
        expect(characters).toHaveLength(2);
      });
    });
  });