// Importation du createReducer qui se trouve dans @reduxjs/toolkit :
import { createReducer } from '@reduxjs/toolkit';
import { Categories, SubCategories, Articles } from '../../@types/wiki';
import { fetchCategories } from '../thunks/categories';
import { fetchSubCategories } from '../thunks/subCategories';
import { fetchArticles } from '../thunks/articles';

// Interface qui type le State :
interface IWikiState {
  categoryData: Categories[]; // c'est la valeur de categoryData qui est un tableau
  subCategoryData: SubCategories[]; // c'est la valeur de subCategoryData qui est un tableau
  articleData: Articles[]; // c'est la valeur de articleData qui est un tableau
}

// Initialisation du State :
export const initialState: IWikiState = {
  categoryData: [],
  subCategoryData: [],
  articleData: [],
};

const wikiReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    // enregistre dans le state les catégories (reçues de l'API et dispo dans le payload de l'action):
    state.categoryData = action.payload;
  })
    .addCase(fetchSubCategories.fulfilled, (state, action) => {
      // enregistre dans le state les sous-catégories (reçues de l'API et dispo dans le payload de l'action):
      state.subCategoryData = action.payload;
    })
    .addCase(fetchArticles.fulfilled, (state, action) => {
      // enregistre dans le state les articles (reçues de l'API et dispo dans le payload de l'action):
      state.articleData = action.payload;
    });
});

export default wikiReducer;
