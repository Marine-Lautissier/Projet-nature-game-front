// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';

// Interface qui type le State :
interface IHomeState {
  homeList: []; // c'est la valeur de homeList qui est un tableau
  article: string; // c'est la valeur de l'article qui est un string
}

// Initialisation du State :
const initialState = {
  homeList: [],
  article: '',
};

const homeReducer = createReducer(initialState, (builder) => {});

export default homeReducer;
