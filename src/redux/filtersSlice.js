import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilterValue(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const { setFilterValue } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
