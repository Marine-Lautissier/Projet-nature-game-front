import {  NavLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import instanceAxios from '../../utils/axios';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/thunks/categories';

function WikiPage() {
  // const test = instanceAxios.get('/categories');
  // console.log(test);
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useAppSelector((state) => state.wikiReducer.categoryData);
  console.log(categories);
  return (
    <div>
      <h1>Accueil Wiki</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
        beatae nemo asperiores a sapiente soluta molestiae itaque distinctio
        deserunt consequatur eligendi modi minima quo, quos eveniet tempore
        eius! Voluptatibus.
      </p>
      <Card.Group>
        {categories.map((category) => (
          <Card key={category.id}>
            <Card.Content>
            <NavLink to={`/wiki/categorie/${category.id}`}>
              {category.name}
            </NavLink>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default WikiPage;
