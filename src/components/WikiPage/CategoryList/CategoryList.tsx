import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

function CategoryList() {
  const subCategories = useAppSelector(
    (state) => state.wikiReducer.subCategoryData
  );
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
                <NavLink to={`/wiki/subcategorie/${subCategory.id}`}>
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
