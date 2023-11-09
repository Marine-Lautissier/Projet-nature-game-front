// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import { Quiz } from '../../@types/quiz';
import { completeQuiz, increaseUserScore, setCurrentQuestionIndex } from '../actions/quizActions';

// Interface qui type le State :
interface IQuizState {
  quizData: Quiz[];
  currentQuestionIndex: number;
  userScore: number;
  quizCompleted: boolean;
}

// Initialisation du State :
const initialState: IQuizState = {
  quizData: [],
  currentQuestionIndex: 0, // L'index de la question actuelle
  userScore: 0, // Le score de l'utilisateur
  quizCompleted: false, // Indique si le quiz est terminé
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentQuestionIndex, (state, action) => {
      state.currentQuestionIndex = action.payload;
    })
    .addCase(increaseUserScore, (state) => {
      state.userScore += 1;
    })
    .addCase(completeQuiz, (state) => {
      state.quizCompleted = true;
    });
});

export default quizReducer;

