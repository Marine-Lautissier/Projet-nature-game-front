import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchRandomArticle = createAsyncThunk('fetchArticleRandom', async () => {
  // appel api pour récupérer les articles:
  const result = await instanceAxios.get('/articles/random');
  console.log(result.data.article);
  // on retourne les données d'un article pour que le reducer les reçoivent dans le payolad de l'action fullfilled:
  return result.data.article;
});