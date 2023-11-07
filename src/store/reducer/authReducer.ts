import { createReducer } from '@reduxjs/toolkit';
import { fetchConnectUser } from '../thunks/connectUser';
import { User } from '../../@types/authentification';
import { actionLogin, changeInputValue } from '../actions/userActions';

// Interface qui type le State d'authentification :
export interface IAuthState {
  user: User[] | null; // Un utilisateur actuellement connecté, s'il y en a un
  loading: boolean; // Pour suivre l'état de chargement de la connexion
  error: string | null; // En cas d'erreur, stocke le message d'erreur ici
  email: string; // Champ email
  password: string; // Champ mot de passe
  token: null | string;
}

// Initialisation du State d'authentification :
export const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
  email: '',
  password: '',
  token: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchConnectUser.pending, (state) => {
      state.loading = true;
      state.error = null; // Réinitialise les erreurs en cours de chargement
    })
    .addCase(fetchConnectUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload; // Stocke les données de l'utilisateur connecté ici
    })
    .addCase(fetchConnectUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null; // Utilise une vérification de type pour traiter 'undefined' comme 'null'
    })
    .addCase(changeInputValue, (state, action) => {
      state.email = action.payload.email; // Mettre à jour l'e-mail
      state.password = action.payload.password; // Mettre à jour le mot de passe
    })
    .addCase(actionLogin, (state, action) => {
      state.loading = false;
    })
  });

export default authReducer;

