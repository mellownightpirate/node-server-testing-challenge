exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("pets")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("characters").insert([
          { name: "Darth Vader", age: "32", location: "Death Star" },
          { name: "Luke Skywalker", age: "23", location: "Tatooine" },
          { name: "Han Solo", age: "30", location: "Corellia" },
          { name: "Princess Leia", age: "22", location: "Alderaan" },
          { name: "Obi-Wan Kenobi", age: "64", location: "Tatooine" },
          { name: "Sheev Palpatine", age: "326", location: "Death Star II" },
          { name: "Yoda", age: "998", location: "Yoda's hut" }
        ]);
      });
  };