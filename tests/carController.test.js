// __tests__/carController.test.js
const request = require('supertest');  // For testing HTTP requests
const express = require('express');
const carController = require('../controllers/carController');
const Car = require('../models/Car');
const logger = require('../config/logger'); // Assuming logger is set up correctly

// Create an instance of the express app
const app = express();
app.use(express.json());

// Mock the carController methods
app.post('/api/cars', carController.createCar);
app.get('/api/cars', carController.getCars);
app.get('/api/cars/:id', carController.getCarById);
app.put('/api/cars/:id', carController.updateCar);
app.delete('/api/cars/:id', carController.deleteCar);

describe('Car Controller Tests', () => {

  // Test creating a car
  it('should create a new car and return the car object', async () => {
    const carData = {
      model: 'Tesla Model 3',
      year: 2022,
      sensors: [
        { type: 'Temperature', value: 25 },
        { type: 'Speed', value: 120 }
      ]
    };

    // Mock Car.save() to simulate a successful save
    jest.spyOn(Car.prototype, 'save').mockResolvedValue(carData);

    const response = await request(app).post('/api/cars').send(carData);
    
    expect(response.status).toBe(201);  // Expect a status code of 201 (Created)
    expect(response.body.model).toBe('Tesla Model 3');
    expect(response.body.year).toBe(2022);
    expect(response.body.sensors.length).toBe(2);
  });

  // Test getting all cars
  it('should fetch all cars', async () => {
    // Mock Car.find() to simulate fetching data
    jest.spyOn(Car, 'find').mockResolvedValue([
      { model: 'Tesla Model 3', year: 2022 },
      { model: 'BMW 3 Series', year: 2021 }
    ]);

    const response = await request(app).get('/api/cars');
    
    expect(response.status).toBe(200);  // Expect a status code of 200 (OK)
    expect(response.body.length).toBeGreaterThan(0);  // Should return at least one car
  });

  // Test getting a car by ID
  it('should fetch a car by ID', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID
    const carData = { model: 'Tesla Model S', year: 2022 };

    // Mock Car.findById() to simulate fetching a single car
    jest.spyOn(Car, 'findById').mockResolvedValue(carData);

    const response = await request(app).get(`/api/cars/${carId}`);
    
    expect(response.status).toBe(200);  // Expect a status code of 200 (OK)
    expect(response.body.model).toBe('Tesla Model S');
    expect(response.body.year).toBe(2022);
  });

  // Test getting a car by ID when not found
  it('should return 404 if car is not found by ID', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID

    // Mock Car.findById() to return null (car not found)
    jest.spyOn(Car, 'findById').mockResolvedValue(null);

    const response = await request(app).get(`/api/cars/${carId}`);
    
    expect(response.status).toBe(404);  // Expect a 404 Not Found error
    expect(response.body.message).toBe('Car not found');
  });

  // Test updating a car
  it('should update car details by ID', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID
    const updatedCarData = {
      model: 'Tesla Model 3',
      year: 2022,
      sensors: [{ type: 'Speed', value: 130 }]
    };

    // Mock Car.findByIdAndUpdate() to simulate a successful update
    jest.spyOn(Car, 'findByIdAndUpdate').mockResolvedValue(updatedCarData);

    const response = await request(app).put(`/api/cars/${carId}`).send(updatedCarData);

    expect(response.status).toBe(200);  // Expect a status code of 200 (OK)
    expect(response.body.model).toBe('Tesla Model 3');
    expect(response.body.sensors.length).toBe(1);
  });

  // Test updating a car when not found
  it('should return 404 if car is not found for update', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID
    const updatedCarData = {
      model: 'Tesla Model X',
      year: 2022,
      sensors: [{ type: 'Temperature', value: 25 }]
    };

    // Mock Car.findByIdAndUpdate() to return null (car not found)
    jest.spyOn(Car, 'findByIdAndUpdate').mockResolvedValue(null);

    const response = await request(app).put(`/api/cars/${carId}`).send(updatedCarData);

    expect(response.status).toBe(404);  // Expect a 404 Not Found error
    expect(response.body.message).toBe('Car not found');
  });

  // Test deleting a car
  it('should delete a car by ID', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID

    // Mock Car.findByIdAndDelete() to simulate a successful delete
    jest.spyOn(Car, 'findByIdAndDelete').mockResolvedValue({ message: 'Car deleted' });

    const response = await request(app).delete(`/api/cars/${carId}`);

    expect(response.status).toBe(200);  // Expect a status code of 200 (OK)
    expect(response.body.message).toBe('Car deleted');
  });

  // Test deleting a car when not found
  it('should return 404 if car is not found for delete', async () => {
    const carId = '607f1f77bcf86cd799439011';  // Example car ID

    // Mock Car.findByIdAndDelete() to return null (car not found)
    jest.spyOn(Car, 'findByIdAndDelete').mockResolvedValue(null);

    const response = await request(app).delete(`/api/cars/${carId}`);

    expect(response.status).toBe(404);  // Expect a 404 Not Found error
    expect(response.body.message).toBe('Car not found');
  });
});
