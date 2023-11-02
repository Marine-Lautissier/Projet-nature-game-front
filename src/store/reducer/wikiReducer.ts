// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import IArticleData from '../../@types/articleData';
import ICategoryData from '../../@types/categoryData';
import ISubCategoryData from '../../@types/subCategoryData';

// Interface qui type le State :
interface IWikiState {
  categoryData : ICategoryData[]; // c'est la valeur de categoryData qui est un tableau
  subCategoryData : ISubCategoryData[]; // c'est la valeur de subCategoryData qui est un tableau
  articleData : IArticleData[]; // c'est la valeur de articleData qui est un tableau
};

// Initialisation du State :
const initialState: IWikiState = {
  categoryData: [],
  subCategoryData: [],
  articleData: [],
};

const wikiReducer = createReducer(initialState, (builder) => {});

export default wikiReducer;
