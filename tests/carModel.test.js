/* eslint-env jest */
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Car = require("../models/Car");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Car Model Tests", () => {
  it("should create and save a car successfully", async () => {
    const car = new Car({ model: "Test Model", year: 2020, sensors: [{ type: "Temperature", value: 25 }] });
    const savedCar = await car.save();
    expect(savedCar._id).toBeDefined();
    expect(savedCar.model).toBe("Test Model");
  });

  it("should fail to create a car without required fields", async () => {
    const car = new Car({});
    let err;
    try {
      await car.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
  });
});