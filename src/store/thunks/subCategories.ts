import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchSubCategories = createAsyncThunk(
  'fetchSubCategories',
  async () => {
    // appel api pour récupérer les subcatégories:
    const result = await instanceAxios.get('/subCategories');
    // on retourne les données d'une subcatégorie pour que le reducer les reçoivent dans le payolad de l'action fullfilled:
    return result.data;
  }
);
