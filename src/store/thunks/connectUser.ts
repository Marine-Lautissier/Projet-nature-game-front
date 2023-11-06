import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';
import { ConnectData } from '../../@types/authentification';
import { RootState } from '../store';

// Création d'un thunk pour la connexion de l'utilisateur
export const fetchConnectUser = createAsyncThunk('fetchConnectUser', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.authReducer;
    // Requête POST à l'API pour connecter l'utilisateur
    const result = await instanceAxios.post('/users/${id}', {
      email: email,
      password: password,
    });

    // Si la connexion réussit, renvoie les données de l'utilisateur ou un jeton d'authentification
    return result.data;
  } catch (error) {
    // En cas d'erreur, rejette la promesse avec l'erreur
    // throw error;
  }
});
