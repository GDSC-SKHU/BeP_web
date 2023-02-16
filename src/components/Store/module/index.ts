import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whilelist: ['user'],
};

const persist = persistReducer(persistConfig, reducers);

const makeStore = () => {
  const store = configureStore({
    reducer: {
      persist,
    },
  });

  return store;
};

const newStore = makeStore();
export default newStore;
