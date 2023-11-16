import { NavLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect } from 'react';
import { fetchArticles } from '../../../store/thunks/articles';

function SubCategoryList() {
  // Obtient l'ID à partir des paramètres d'URL
  const { id } = useParams();
  // Convertit l'ID en nombre entier
  const subCategoryId = id ? parseInt(id, 10) : undefined;

  // Récupère les sous-catégories et les articles à partir du Redux Store
  const subCategories = useAppSelector((state) => state.wikiReducer.subCategoryData);
  const articles = useAppSelector((state) => state.wikiReducer.articleData);

  // Trouve la sous-catégorie sélectionnée à partir de l'ID
  const selectedSubCategory = subCategories.find((subCategory) => subCategory.id === subCategoryId);

  // Filtrer les articles en fonction de la sous-catégorie sélectionnée
  const filteredArticles = articles.filter((article) => article.subcategory.id === subCategoryId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);


  return (
    <div>
      {/* Vérifie si une sous-catégorie est sélectionnée */}
      {selectedSubCategory && (
        <>
          <h2>{selectedSubCategory.name}</h2>
          <img src={selectedSubCategory.picture.url} alt="" />
          <p>{selectedSubCategory.description}</p>
        </>
      )}
      <p>Liste des articles</p>
      {/* Affiche la liste des articles filtrés */}
      <Card.Group itemsPerRow={3}>
        {filteredArticles.map((article) => (
          <Card key={article.id}>
            <Card.Content>
              <Card.Header>
                <NavLink to={`/wiki/articles/${article.id}`}>{article.name}</NavLink>
              </Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default SubCategoryList;
