import { createAction } from '@reduxjs/toolkit';

// Création d'une action avec Redux Toolkit pour cliquer/valider une réponse
export const clickResponse = createAction('CLICK_RESPONSE');

// Création d'une action avec Redux Toolkit pour augmenter le score de l'utilisateur
export const increaseUserScore = createAction('INCREASE_USER_SCORE');

// Création d'une action avec Redux Toolkit pour marquer le quiz comme terminé
export const completeQuiz = createAction('COMPLETE_QUIZ');

// Création d'une action avec Redux Toolkit pour l'index question
export const setCurrentQuestionIndex = createAction('SET_CURRENT_QUESTION_INDEX');