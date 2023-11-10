import { createAction } from '@reduxjs/toolkit';
// Le type du payload
interface ChangeInputPayload {
  email: string;
  password: string;
}
// Création d'une action avec Redux Toolkit pour changer à la fois l'e-mail et le mot de passe
export const changeInputValue = createAction<ChangeInputPayload>('CHANGE_INPUT_VALUE');
// Création d'une action avec Redux Toolkit pour permettre la connexion au clic
export const actionLogin = createAction('LOGIN');

// Le type du payload
interface ChangeInputRegisterPayload {
  email: string;
  password: string;
  pseudo: string;
}
// Création d'une action avec Redux Toolkit pour changer à la fois l'e-mail, le mot de passe et le pseudo
export const changeInputRegisterValue = createAction<ChangeInputRegisterPayload>('CHANGE_INPUT_REGISTER_VALUE');
// Création d'une action avec Redux Toolkit pour permettre l'inscription au clic
export const actionRegister = createAction('REGISTER');

// Création d'une action avec Redux Toolkit pour permettre la déconnexion
export const logOut = createAction('LOGOUT');

// Création d'une action avec Redux Toolkit pour définir le token d'authentification
export const setToken = createAction<{token: string, pseudo: string}>('user/setToken');