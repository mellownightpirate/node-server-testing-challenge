const server = require("./server");
const request = require("supertest");

describe("server.js module", () => {
  it("has the right environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("live API endpoint", () => {
    it("returns a 200 OK, supertest", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("returns the correct message", () => {
      return request(server)
        .get("/")
        .expect({ message: `This API is live` });
    });

    it("returns the correct headers", () => {
      return request(server)
        .get("/")
        .expect("Content-Length", "30")
        .expect("Content-Type", /json/);
    });
  });
});