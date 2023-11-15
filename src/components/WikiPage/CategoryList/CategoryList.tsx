import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { fetchSubCategories } from '../../../store/thunks/subCategories';
import { SubCategories } from '../../../@types/wiki';

function CategoryList() {
  // Obtient l'ID à partir des paramètres d'URL
  const { id } = useParams();
  // Convertit l'ID en nombre entier
  const categoryId = id ? parseInt(id, 10) : undefined;

  // Récupère les catégories et les sous-catégories à partir du Redux Store
  const categories = useAppSelector((state) => state.wikiReducer.categoryData);
  const subCategories = useAppSelector((state) => state.wikiReducer.subCategoryData);

  // Filtre la catégorie sélectionnée en fonction de l'`id`
  const selectedCategory = categories.find((category) => category.id === categoryId);

  // Filtre les sous-catégories en fonction de la catégorie sélectionnée
  const filteredSubCategories = subCategories.filter((subCategory) => subCategory.category.id === categoryId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, [dispatch]);

  return (
    <>
      {/* Vérifie si une catégorie est sélectionnée */}
      {selectedCategory && (
        <div key={selectedCategory.id} className="presentation">
          <h1>{selectedCategory.name}</h1>
          <p>{selectedCategory.description}</p>
        </div>
      )}

      {/* Affiche la liste des sous-catégories filtrées */}
      <Card.Group>
        {filteredSubCategories.map((subCategory: SubCategories) => (
          <Card key={subCategory.id}>
            <Card.Content>
              <Card.Header>
                <Image as={NavLink} to={`/wiki/subcategories/${subCategory.id}`} src={subCategory.picture.url} wrapped ui={false} />
              </Card.Header>
              <NavLink to={`/wiki/subcategories/${subCategory.id}`}>{subCategory.name}</NavLink>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
    
  );
}

export default CategoryList;
