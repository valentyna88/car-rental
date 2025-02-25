import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk('cars/fetchAll', async () => {
  const { data } = await axios.get('/cars');
  return data;
});
