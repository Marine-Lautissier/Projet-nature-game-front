import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Container, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchRandomArticle } from '../../../store/thunks/randomArticle';

import './RandomArticle.scss';

// Fonction qui affiche l'article du jour dans la page principale d'accueil:
function RandomArticle() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    // Appel de l'action asynchrone pour récupérer un article aléatoire
    dispatch(fetchRandomArticle());
  }, [dispatch]);

  const randomArticle = useAppSelector((state) => state.homeReducer.randomArticle);
  console.log(randomArticle);

  return (
    <Container>
      <Segment padded="very">
      {randomArticle && (
        // Affichage de l'article
        <div key={randomArticle.id}>
          <h3>Article du jour</h3>
          <h2>{randomArticle.name}</h2>
          {randomArticle.picture && <img src={randomArticle.picture?.url} alt="Article" />}
          <p>{`${randomArticle.description?.substring(0, 100)}...`}</p>
            <Button as={Link} to="/wiki/article/random" state={{ articleRandom: randomArticle }}>
            Lire la suite
            </Button>
        </div>
      )}
      </Segment>
    </Container>
  );
}

export default RandomArticle;
