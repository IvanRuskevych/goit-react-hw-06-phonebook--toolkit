import { createStore } from 'redux';
import { reducer } from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const { devToolsEnhancer } = require('@redux-devtools/extension');
const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancer);

export const persistorStore = persistStore(store);
