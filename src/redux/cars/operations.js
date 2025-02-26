import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk('cars/fetchAll', async () => {
  const { data } = await axios.get('/cars');
  return data.cars;
});

export const fetchCarById = createAsyncThunk(
  'car/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
