import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
