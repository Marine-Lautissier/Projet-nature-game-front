import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchArticles = createAsyncThunk('fetchArticles', async () => {
  // appel api pour récupérer les articles:
  const result = await instanceAxios.get('/articles');
  // on retourne les données d'un article pour que le reducer les reçoivent dans le payolad de l'action fullfilled:
  return result.data.articles;
});
