// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import { Quiz } from '../../@types/quiz';
import { completeQuiz, increaseUserScore, setCurrentQuestionIndex, clickResponse, clickNextQuestion } from '../actions/quizActions';
import { fetchQuizQuestion } from '../thunks/quiz';

// Interface qui type le State :
export interface IQuizState {
  quizData: Quiz[];
  currentQuestionIndex: number;
  userScore: number;
  quizCompleted: boolean;
}

// Initialisation du State :
export const initialState: IQuizState = {
  quizData: [],
  currentQuestionIndex: 0, // L'index de la question actuelle
  userScore: 0, // Le score de l'utilisateur
  quizCompleted: false, // Indique si le quiz est terminé
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchQuizQuestion.fulfilled, (state, action) => {
      state.quizData = action.payload;
    })
    .addCase(clickResponse, (state, action) => {
      state.quizData = action.payload;
      console.log(state.quizData);
    })
    .addCase(setCurrentQuestionIndex, (state) => {
      state.currentQuestionIndex += 1;
    })
    .addCase(increaseUserScore, (state) => {
      state.userScore += 1;
    })
    .addCase(completeQuiz, (state) => {
      state.quizCompleted = true;


    });
});

export default quizReducer;

