// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import { Quiz } from '../../@types/quiz';
import { completeQuiz, updateUserScore, setCurrentQuestionIndex, clickResponse, IResponseTypage, updateUserResponse, startGame } from '../actions/quizActions';
import { fetchQuizQuestion } from '../thunks/quiz';

// Interface qui type le State :
export interface IQuizState {
  quizData: Quiz[];
  currentQuestionIndex: number;
  userScore: number;
  quizCompleted: boolean;
  userResponse: string | IResponseTypage;
}

// Initialisation du State :
export const initialState: IQuizState = {
  quizData: [],
  currentQuestionIndex: 0, // L'index de la question actuelle
  userScore: 0, // Le score de l'utilisateur
  quizCompleted: false, // Indique si le quiz est terminé
  userResponse:'' ,
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchQuizQuestion.fulfilled, (state, action) => {
      state.quizData = action.payload;
    })
    .addCase(clickResponse, (state, action) => {
      state.userResponse = action.payload;
    })
    .addCase(setCurrentQuestionIndex, (state) => {
      state.currentQuestionIndex += 1;
    })
    .addCase(updateUserScore, (state, action) => {
      state.userScore = action.payload;
    })
    .addCase(completeQuiz, (state) => {
      state.quizCompleted = true;
    })
    .addCase(updateUserResponse, (state, action) => {
    state.userResponse = action.payload;
    })
    .addCase(startGame, (state) => {
      state.quizCompleted = false;
});
})

export default quizReducer;

