// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';

import IPlayers from '../../@types/players';

// Interface qui type le State :
interface IHomeState {
  homeList: IPlayers[]; // c'est la valeur de homeList qui est un tableau
  article: string; // c'est la valeur de l'article qui est un string
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
  article: '',
};

const homeReducer = createReducer(initialState, (builder) => {});

export default homeReducer;
