/* eslint-env jest */
require("dotenv").config({ path: ".env.test" }); // Load test env
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI); // Use test DB
});

afterAll(async () => {
  await mongoose.connection.close(); // Close DB connection
});

describe("Server Initialization", () => {
  it("should respond with 404 for unknown routes", async () => {
    const res = await request(app).get("/unknown-route");
    expect(res.statusCode).toBe(404);
  });

  it("should load the API tester HTML file", async () => {
    const res = await request(app).get("/tester");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toContain("text/html");
  });
});
