import { NavLink } from 'react-router-dom';
import SubCategoryList from '../SubCategoryList/SubCategoryList';

function CategoryList() {
  interface ISubCategoryList {
    id: number;
    name: string;
  }

  // Tableau d'objets des noms de sous-catégories
  const subCategories: ISubCategoryList[] = [
    { id: 1, name: 'Forêt' },
    { id: 2, name: 'Montagne' },
    { id: 3, name: 'Mer' },
  ];

  return (
    <>
      <div className="presentation">
        <h1>Flore</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores
          unde veniam magni cum, minus nihil, explicabo nulla exercitationem
          dolor modi saepe, facere ipsum quod. Sunt aspernatur officiis nesciunt
          a!
        </p>
      </div>
      <div className="subcategory-list">
        <div className="subcategory-cards">
          {subCategories.map((subCategory) => (
            <div key={subCategory.id} className="subcategory-card">
              <li>
                <NavLink to="/wiki/sous-categorie/{id}">
                  {subCategory.name}
                </NavLink>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryList;
