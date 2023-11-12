import { createReducer } from '@reduxjs/toolkit';
import IPlayers from '../../@types/players';
import IrandomArticle from '../../@types/randomArticle';
import { fetchRandomArticle } from '../thunks/randomArticle';

// Interface qui type le State :
interface IHomeState {
  homeList: IPlayers[];
  randomArticle: IrandomArticle[];
}

// Initialisation du State :
const initialState: IHomeState = {
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
  randomArticle: [
    {
      id: 0,
      name: '',
      description: '',
      subcategory: {
        name: '',
      },
      picture: '',
    },
  ],
};

const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRandomArticle.fulfilled, (state, action) => {

    state.randomArticle = action.payload;
  });
});

export default homeReducer;
