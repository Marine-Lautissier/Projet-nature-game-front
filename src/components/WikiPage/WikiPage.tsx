import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import instanceAxios from '../../utils/axios';

function WikiPage() {
  // const test = instanceAxios.get('/categories');
  // console.log(test);

  const categories = useAppSelector((state) => state.wikiReducer.categoryData);
  return (
    <div>
      <h1>Accueil Wiki</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
        beatae nemo asperiores a sapiente soluta molestiae itaque distinctio
        deserunt consequatur eligendi modi minima quo, quos eveniet tempore
        eius! Voluptatibus.
      </p>
      <div className="category-list">
        <div className="category-cards">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <li>
                <NavLink to={`/wiki/categorie/${category.id}`}>
                  {category.name}
                </NavLink>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default WikiPage;
