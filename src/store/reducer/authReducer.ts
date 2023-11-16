import { createReducer } from '@reduxjs/toolkit';
import { fetchConnectUser } from '../thunks/connectUser';
import { User } from '../../@types/authentication';
import { actionLogin, actionRegister, changeInputRegisterValue, changeInputValue, logOut, setToken } from '../actions/userActions';
import { fetchRegisterUser } from '../thunks/registerUser';

// Interface qui type le State d'authentification :
export interface IAuthState {
  loading: boolean; // Pour suivre l'état de chargement de la connexion
  error: string | null; // En cas d'erreur, stocke le message d'erreur ici
  avatar: string;
  pseudo: string; // Champ pseudo
  email: string; // Champ email
  password: string; // Champ mot de passe
  logged: boolean;
  token: null | string;
  quizzScore: number | string;
}
// Initialisation du State d'authentification :
export const initialState: IAuthState = {
  loading: false,
  error: null,
  avatar: '',
  pseudo: '',
  email: '',
  password: '',
  logged: false,
  token: null,
  quizzScore: 0,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchConnectUser.pending, (state) => {
      state.loading = true;
      state.error = null; // Réinitialise les erreurs en cours de chargement
    })
    .addCase(fetchConnectUser.fulfilled, (state, action) => {
      console.log(state);
      state.loading = false;
      state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.quizzScore = action.payload.quizzScore;
    })
    .addCase(fetchConnectUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null; // Utilise une vérification de type pour traiter 'undefined' comme 'null'
    })
    .addCase(changeInputValue, (state, action) => {
      state.email = action.payload.email; // Met à jour l'e-mail
      state.password = action.payload.password; // Met à jour le mot de passe
    })
    .addCase(actionLogin, (state) => {
      state.loading = false;
    })
    .addCase(fetchRegisterUser.pending, (state) => {
      state.loading = true;
      state.error = null; // Réinitialise les erreurs en cours de chargement
    })
    .addCase(fetchRegisterUser.fulfilled, (state) => {
      state.loading = false;
      state.logged = false;
    })
    .addCase(fetchRegisterUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null; // Utilise une vérification de type pour traiter 'undefined' comme 'null'
    })
    .addCase(changeInputRegisterValue, (state, action) => {
      state.email = action.payload.email; // Met à jour l'e-mail
      state.password = action.payload.password; // Met à jour le mot de passe
      state.pseudo = action.payload.pseudo; // Met à jour le pseudo
    })
    .addCase(actionRegister, (state) => {
      state.loading = false;
    })
    .addCase(logOut, (state) => {
      state.logged = false;
      state.pseudo = '';
      state.email = '';
      state.avatar = '';
      state.token = null;
      state.quizzScore = 0;
    })
    .addCase(setToken, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.quizzScore = action.payload.quizzScore;
      state.logged = true;
    })
});
export default authReducer;