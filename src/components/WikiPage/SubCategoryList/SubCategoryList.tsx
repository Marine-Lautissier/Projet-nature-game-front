import { NavLink } from 'react-router-dom';

function SubCategoryList() {
  const recipes = useAppSelector((state) => state.recipes.list);
  
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
            <NavLink to="/wiki/article/{id}">{article.name}</NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SubCategoryList;
