import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';
import { RootState } from '../store';
// Création d'un thunk pour la connexion de l'utilisateur
export const fetchRegisterUser = createAsyncThunk('fetchRegisterUser', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password, pseudo } = state.authReducer;
    // Requête POST à l'API pour inscrire l'utilisateur
    const result = await instanceAxios.post('/users', {
      email: email,
      password: password,
      pseudo: pseudo,
    });
    // on va ajouter le token dans l'instance axios
    instanceAxios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
    console.log(result);
    // Si la connexion réussit, renvoie les données de l'utilisateur ou un jeton d'authentification
    return result.data;
  } catch (error) {
    // En cas d'erreur, rejette la promesse avec l'erreur
    // throw error;
  }
});