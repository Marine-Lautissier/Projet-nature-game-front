// Importation du configureStore qui se trouve dans @reduxjs/toolkit :
import { configureStore } from '@reduxjs/toolkit';

// Importation du homeReducer :
import homeReducer from './reducer/homeReducer';
import wikiReducer from './reducer/wikiReducer';

// Création du store :
const store = configureStore({
  reducer: {
    homeReducer,
    wikiReducer,
  },
});

export default store;

// On déduit le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
