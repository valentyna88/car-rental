import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
