import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Card } from 'semantic-ui-react';

function SubCategoryList() {
  const subCategories = useAppSelector((state) => state.wikiReducer.subCategoryData);
  const articles = useAppSelector((state) => state.wikiReducer.articleData);
  return (
    <div>
      {subCategories.map((subCategory) => (
      <>
      <h2 key={subCategory.id}>{subCategory.name}</h2>
      <p>
      {subCategory.description}
      </p>
      </>
  ))}
      <p>Liste des articles</p>
      <Card.Group>
        {articles.map((article) => (
          <Card key={article.id}>
            <Card.Content>
              <Card.Header><NavLink to={`/wiki/categorie/${article.id}`}>{article.name}</NavLink></Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default SubCategoryList;
