import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

function SubCategoryList() {
  const articles = useAppSelector((state) => state.wikiReducer.articleData);
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
            <NavLink to={`/wiki/article/${article.id}`}>{article.name}</NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SubCategoryList;
