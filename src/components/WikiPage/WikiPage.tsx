import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import instanceAxios from '../../utils/axios';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/thunks/categories';
import React from 'react';

function WikiPage() {
  // const test = instanceAxios.get('/categories');
  // console.log(test);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useAppSelector((state) => state.wikiReducer.categoryData);

  return (
    <div>
      <h1>Accueil Wiki</h1>
      <p>
        Vous trouverez sur cette page d'accueil Wiki trois catégories, que vous trouverez ci-dessous, ainsi que leurs sous-catégories et leurs articles.
        <br />
        Bonne lecture!
      </p>
      <Card.Group itemsPerRow={3}>
        {categories.map((category) => (
          <Card key={category.id}>
            <Card.Content>
              <Card.Header>
                <Image as={NavLink} to={`/wiki/categories/${category.id}`} src={category.picture.url} wrapped ui={false} />
              </Card.Header>
              <NavLink to={`/wiki/categories/${category.id}`}>
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
