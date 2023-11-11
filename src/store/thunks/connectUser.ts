import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';
import { RootState } from '../store';

// Création d'un thunk pour la connexion de l'utilisateur
export const fetchConnectUser = createAsyncThunk('fetchConnectUser', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.authReducer;
    // Requête POST à l'API pour connecter l'utilisateur
    const result = await instanceAxios.post('/login', {
      username: email,
      password: password,
    });

    // Stocke le token d'authentification dans le localStorage
    localStorage.setItem('authToken', result.data.token);

    localStorage.setItem('authPseudo', result.data.pseudo);

    // on va ajouter le token dans l'instance axios
    instanceAxios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;

    console.log(result.data.token);
    // Si la connexion réussit, renvoie les données de l'utilisateur ou un jeton d'authentification
    return result.data;
  } catch (error) {
    // En cas d'erreur, rejette la promesse avec l'erreur
    //  throw error;
  }
});
