import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchBrands, fetchCarById } from './operations';

const initialState = {
  cars: [],
  brands: [],
  carDetails: null,
  isLoading: false,
  error: null,
  // totalPages: 1,
  totalCars: 0,
  limit: 12,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    // setPage(state, action) {
    //   state.currentPage = action.payload;
    // },
    // resetPage(state) {
    //   state.currentPage = 1;
    // },
    clearCars(state) {
      state.cars = [];
      state.totalCars = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const { cars, reset } = action.payload;
        if (reset) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCarById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBrands.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCars } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
