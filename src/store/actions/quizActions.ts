import { createAction } from '@reduxjs/toolkit';

export interface IResponseTypage {
  answer: string,
  isCorrect: boolean,
}

// Création d'une action avec Redux Toolkit pour cliquer/valider une réponse
export const clickResponse = createAction<IResponseTypage>('CLICK_RESPONSE');

// Création d'une action avec Redux Toolkit pour augmenter le score de l'utilisateur
export const updateUserScore = createAction<number>('UPDATE_USER_SCORE');

// Création d'une action avec Redux Toolkit pour marquer le quiz comme terminé
export const completeQuiz = createAction('COMPLETE_QUIZ');

// Création d'une action avec Redux Toolkit pour l'index question
export const setCurrentQuestionIndex = createAction('SET_CURRENT_QUESTION_INDEX');

// Création d'une action avec Redux Toolkit pour mettre à jour la réponse de l'utilisateur
export const updateUserResponse = createAction<string>('UPDATE_USER_RESPONSE');

// Création d'une action avec Redux Toolkit pour permettre à l'utilisateur de relancer une partie quizz
export const startGame = createAction('START_GAME');