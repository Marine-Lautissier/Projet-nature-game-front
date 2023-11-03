import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Card } from 'semantic-ui-react';

function CategoryList() {
  const { id } = useParams();
  const categories = useAppSelector(
    (state) => state.wikiReducer.categoryData
  );
  const subCategories = useAppSelector(
    (state) => state.wikiReducer.subCategoryData
  );
  return (
    <>
    {categories.filter((category) => category.name.length > 3)
  .map((category) => (
    <div key={category.id} className="presentation">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
    ))}

      <Card.Group>
        {subCategories.map((subCategory) => (
          <Card key={subCategory.id}>
            <Card.Content>
              <Card.Header><NavLink to={`/wiki/categorie/${subCategory.id}`}>{subCategory.name}</NavLink></Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
}

export default CategoryList;
