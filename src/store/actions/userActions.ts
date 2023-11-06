import { createAction } from '@reduxjs/toolkit';

// Le type du payload
interface ChangeCredentialsPayload {
  email: string;
  password: string;
}

// Créez une action avec Redux Toolkit pour changer à la fois l'e-mail et le mot de passe
export const changeCredentials = createAction<ChangeCredentialsPayload>('CHANGE_CREDENTIALS');
