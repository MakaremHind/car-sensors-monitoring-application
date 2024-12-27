/* eslint-env jest */
require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const Car = require("../models/Car");

let carId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const car = new Car({ model: "Test Model", year: 2020, sensors: [{ type: "Temperature", value: 30 }] });
  const savedCar = await car.save();
  carId = savedCar._id;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Car Routes API Tests", () => {
  it("should fetch all cars", async () => {
    const res = await request(app).get("/api/cars");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should fetch a car by ID", async () => {
    const res = await request(app).get(`/api/cars/${carId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(carId.toString());
  });

  it("should update a car by ID", async () => {
    const res = await request(app).put(`/api/cars/${carId}`).send({ model: "Updated Model" });
    expect(res.statusCode).toBe(200);
    expect(res.body.model).toBe("Updated Model");
  });

  it("should delete a car by ID", async () => {
    const res = await request(app).delete(`/api/cars/${carId}`);
    expect(res.statusCode).toBe(200);
  });
});
