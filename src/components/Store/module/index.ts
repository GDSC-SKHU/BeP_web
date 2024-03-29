import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import missonAnswer from './misson/answer';
import missonClearFlag from './misson/clearMisson';
import globalmodalState from './globalmodal';
import globalLatLng from './misson/latandlng';
const reducers = combineReducers({
  missonClear: missonClearFlag.reducer,
  globalModal: globalmodalState.reducer,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whilelist: ['user'],
  timeout: 1800000,
};

const persist = persistReducer(persistConfig, reducers);

const newStore = configureStore({
  reducer: {
    global: persist,
    latlng: globalLatLng.reducer,
    missons: missonAnswer.reducer,
  },

  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export default newStore;

export type RootState = ReturnType<typeof newStore.getState>;
