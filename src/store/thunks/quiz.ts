import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

export const fetchQuizQuestion = createAsyncThunk('fetchQuizQuestion', async () => {
  // appel api pour récupérer les questions du quiz:
  const result = await instanceAxios.get('/quiz/questions');
  console.log(result);

  return result.data.quiz;
});