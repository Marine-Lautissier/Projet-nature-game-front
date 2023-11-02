import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  // appel api pour récupérer les catégories:
  const result = await instanceAxios.get('/categories');
  console.log(result);
  // on retourne les données d'une catégorie pour que le reducer les reçoivent dans le payload de l'action fullfilled:
  return result.data;
});
