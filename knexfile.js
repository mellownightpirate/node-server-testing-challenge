// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/characters"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing-characters"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seed"
    }
  }
};