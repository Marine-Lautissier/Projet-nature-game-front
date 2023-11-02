// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import IArticleData from '../../@types/articleData';

// Interface qui type le State :
interface IWikiState {
  articleData : IArticleData[]; // c'est la valeur de articleData qui est un tableau
};

// Initialisation du State :
const initialState: IWikiState = {
  articleData: [],
};

const wikiReducer = createReducer(initialState, (builder) => {});

export default wikiReducer;
