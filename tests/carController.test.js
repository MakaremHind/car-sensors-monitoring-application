/* eslint-env jest */
require("dotenv").config({ path: ".env.test" }); // Load test environment variables
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server"); // Use app instance
const Car = require("../models/Car");
jest.setTimeout(30000); // Set 30 seconds timeout for tests
// Database setup with error handling for tests
beforeAll(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.error("Test Database Connection Failed", err);
    process.exit(1); // Ensure process exits gracefully if DB connection fails
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Car Controller Tests", () => {
  let carId;

  // Setup test data before each test
  beforeEach(async () => {
    const car = new Car({
      model: "Tesla Model 3",
      year: 2022,
      sensors: [
        { type: "Temperature", value: 25 },
        { type: "Speed", value: 120 }
      ]
    });
    const savedCar = await car.save();
    carId = savedCar._id;
  });

  // Cleanup test data after each test
  afterEach(async () => {
    await Car.deleteMany();
  });

  // Test creating a car
  it("should create a new car and return the car object", async () => {
    const carData = {
      model: "Tesla Model X",
      year: 2023,
      sensors: [{ type: "Pressure", value: 35 }]
    };

    const response = await request(app).post("/api/cars").send(carData);
    expect(response.status).toBe(201);
    expect(response.body.model).toBe("Tesla Model X");
  });

  // Test fetching all cars
  it("should fetch all cars", async () => {
    const response = await request(app).get("/api/cars");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Test fetching a car by ID
  it("should fetch a car by ID", async () => {
    const response = await request(app).get(`/api/cars/${carId}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(carId.toString());
  });

  // Test 404 for non-existent car by ID
  it("should return 404 if car is not found by ID", async () => {
    const response = await request(app).get("/api/cars/60d21b9667d0d8992e610c85");
    expect(response.status).toBe(404);
  });

  // Test updating a car
  it("should update car details by ID", async () => {
    const updatedCarData = { model: "Tesla Model S", year: 2024 };
    const response = await request(app).put(`/api/cars/${carId}`).send(updatedCarData);
    expect(response.status).toBe(200);
    expect(response.body.model).toBe("Tesla Model S");
  });

  // Test 404 for updating a non-existent car
  it("should return 404 if car is not found for update", async () => {
    const updatedCarData = { model: "Unknown Model", year: 2024 };
    const response = await request(app).put("/api/cars/60d21b9667d0d8992e610c85").send(updatedCarData);
    expect(response.status).toBe(404);
  });

  // Test deleting a car
  it("should delete a car by ID", async () => {
    const response = await request(app).delete(`/api/cars/${carId}`);
    expect(response.status).toBe(200);
  });

  // Test 404 for deleting a non-existent car
  it("should return 404 if car is not found for delete", async () => {
    const response = await request(app).delete("/api/cars/60d21b9667d0d8992e610c85");
    expect(response.status).toBe(404);
  });
});

// Fix ReferenceError: mongoose is not defined
if (typeof mongoose !== "undefined") {
  afterAll(async () => {
    await mongoose.connection.close();
  });
}
