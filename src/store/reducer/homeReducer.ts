import { createReducer } from '@reduxjs/toolkit';
import IPlayers from '../../@types/players';
import { IRandomArticle } from'../../@types/randomArticle';
import { fetchRandomArticle } from '../thunks/randomArticle';

// Interface qui type le State :
export interface IHomeState {
  homeList: IPlayers[];
  randomArticle: IRandomArticle;
}

// Initialisation du State :
export const initialState: IHomeState = {
  homeList: [
    {
      pseudo: 'Ismael',
    },
    {
      pseudo: 'Lola',
    },
    {
      pseudo: 'Rosa',
    },
    {
      pseudo: 'Nicolas',
    },
    {
      pseudo: 'Marine',
    },
  ],
  randomArticle: {  
    description: '',
    id: 1,
    name: '',
    picture: {
      id: 1,
      name: '',
      url: '',
    },
    subcategory: {
      category: [],
      id: 1,
      name: '',
    },
  },
};

const homeReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(fetchRandomArticle.fulfilled, (state, action) => {
    state.randomArticle = action.payload;
  });
});

export default homeReducer;
