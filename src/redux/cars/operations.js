import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (filters, thunkApi) => {
    try {
      const params = {};
      if (filters.brand) params.brand = filters.brand;
      if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
      if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
      if (filters.mileageTo) params.maxMileage = filters.mileageTo;

      const { data } = await axios.get('/cars', { params });
      return data.cars;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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

export const fetchBrands = createAsyncThunk(
  'brands/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await axios.get('/brands');
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
