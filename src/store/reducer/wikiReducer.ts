// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import { Categories, SubCategories, Articles } from '../../@types/wiki';
import { fetchCategories } from '../thunks/categories';

// Interface qui type le State :
interface IWikiState {
  categoryData: Categories[]; // c'est la valeur de categoryData qui est un tableau
  subCategoryData: SubCategories[]; // c'est la valeur de subCategoryData qui est un tableau
  articleData: Articles[]; // c'est la valeur de articleData qui est un tableau
}

// Initialisation du State :
const initialState: IWikiState = {
  categoryData: [],
  subCategoryData: [],
  articleData: [],
};

const wikiReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    // enregistre dans le state les catégories (reçues de l'API et dispo dans le payload de l'action):
    state.categoryData = action.payload;
  });
});

export default wikiReducer;
