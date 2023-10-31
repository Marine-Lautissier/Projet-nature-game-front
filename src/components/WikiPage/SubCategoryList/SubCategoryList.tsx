import { NavLink } from 'react-router-dom';

function SubCategoryList() {
  interface IArticles {
    id: number;
    name: string;
  }

  // Tableau d'objets des noms des articles
  const articles: IArticles[] = [
    { id: 1, name: 'Abeille' },
    { id: 2, name: 'Coccinelle' },
    { id: 3, name: 'Fourmi' },
  ];
  return (
    <div>
      <h2>Forêt</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, debitis
        molestiae a soluta cumque sed labore expedita deleniti saepe
        consequuntur, asperiores inventore veritatis aliquid enim sequi velit
        quam aperiam dicta.
      </p>
      <p>Liste des articles</p>
      {articles.map((article) => (
        <ul key={article.id}>
          <li>
            <NavLink to="/wiki/artcile/{id}">{article.name}</NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SubCategoryList;
