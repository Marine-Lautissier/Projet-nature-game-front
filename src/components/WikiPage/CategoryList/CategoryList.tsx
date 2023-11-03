import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Card } from 'semantic-ui-react';

function CategoryList() {
  const { id } = useParams();
  const categoryId = id ? parseInt(id, 10) : undefined;
  const categories = useAppSelector((state) => state.wikiReducer.categoryData);
  const subCategories = useAppSelector((state) => state.wikiReducer.subCategoryData);

  // Filtrer la catégorie sélectionnée en fonction de l'`id`
  const selectedCategory = categories.find((category) => category.id === categoryId);

  return (  
    <>
      {selectedCategory && (
        <div key={selectedCategory.id} className="presentation">
          <h1>{selectedCategory.name}</h1>
          <p>{selectedCategory.description}</p>
        </div>
      )}

      <Card.Group>
        {subCategories.map((subCategory) => (
          <Card key={subCategory.id}>
            <Card.Content>
              <Card.Header>
                <NavLink to={`/wiki/categorie/${subCategory.id}`}>{subCategory.name}</NavLink>
              </Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
}

export default CategoryList;
