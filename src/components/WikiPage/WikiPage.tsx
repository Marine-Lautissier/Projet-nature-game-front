import { NavLink } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';

function WikiPage() {
  interface ICategoryList {
    id: number;
    name: string;
  }

  // Tableau d'objets des noms de catégories
  const categories: ICategoryList[] = [
    { id: 1, name: 'Faune' },
    { id: 2, name: 'Flore' },
    { id: 3, name: 'Fungi' },
  ];

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
                <NavLink to="/wiki/categorie/{id}">{category.name}</NavLink>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default WikiPage;
