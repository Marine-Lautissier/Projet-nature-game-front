import { NavLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useEffect } from 'react';
import { fetchArticles } from '../../../store/thunks/articles';

function SubCategoryList() {
  const { id } = useParams();
  const subCategoryId = id ? parseInt(id, 10) : undefined;

  const subCategories = useAppSelector((state) => state.wikiReducer.subCategoryData);
  const articles = useAppSelector((state) => state.wikiReducer.articleData);

  const selectedSubCategory = subCategories.find((subCategory) => subCategory.id === subCategoryId);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  
  return (
    <div>
      {selectedSubCategory && (
      <>
      <h2 key={selectedSubCategory.id}>{selectedSubCategory.name}</h2>
      <img src={selectedSubCategory.picture.url} alt="" />
      <p>
      {selectedSubCategory.description}
      </p>
      </>
  )}
      <p>Liste des articles</p>
      <Card.Group>
        {articles.map((article) => (
          <Card key={article.id}>
            <Card.Content>
              <Card.Header><NavLink to={`/wiki/articles/${article.id}`}>{article.name}</NavLink></Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default SubCategoryList;
