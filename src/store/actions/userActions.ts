import { createAction } from '@reduxjs/toolkit';

// Le type du payload
interface ChangeInputPayload {
  email: string;
  password: string;
}

// Création d'une action avec Redux Toolkit pour changer à la fois l'e-mail et le mot de passe
export const changeInputValue = createAction<ChangeInputPayload>('CHANGE_CREDENTIALS');

// Création d'une action avec Redux Toolkit pour permettre la connexion au clic
export const actionLogin = createAction('LOGIN');