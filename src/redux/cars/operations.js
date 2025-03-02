import { createAsyncThunk } from '@reduxjs/toolkit';
import { buildParams } from '../../utils/utils';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page = 1, filters = {}, reset = false }, thunkApi) => {
    try {
      // const params = buildParams(filters);
      // const { page, limit } = filters;
      // const { data } = await axios.get('/cars', {
      //   params: { ...params, page, limit },
      // });
      const params = buildParams(page, filters);
      const { data } = await axios.get('/cars', {
        params,
      });
      return { reset, ...data };
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
