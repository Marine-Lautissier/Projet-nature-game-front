// Importation du configureStore qui se trouve dans @reduxjs/toolkit :
import { configureStore } from '@reduxjs/toolkit';

// Importation du homeReducer et du wikiReducer :
import homeReducer from './reducer/homeReducer';
import wikiReducer from './reducer/wikiReducer';
import authReducer from './reducer/authReducer';
import quizReducer from './reducer/quizReducer';
// Création du store :
const store = configureStore({
  reducer: {
    homeReducer,
    wikiReducer,
    authReducer,
    quizReducer,
  },
});

export default store;

// On déduit le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
