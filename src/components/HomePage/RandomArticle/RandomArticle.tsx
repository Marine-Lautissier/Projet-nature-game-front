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
    <Container className='container-random-article' style={{ borderRadius: '55px', border: '4px solid lightgrey' }}>
      <Segment padded="very" style={{ background: '#50a060', color: 'white', borderRadius: '55px' }}>
      {randomArticle && (
        // Affichage de l'article
        <div className="article-day" key={randomArticle.id}>
          <h3>Article du jour</h3>
          <h2>{randomArticle.name}</h2>
          {randomArticle.picture && <img className='img-random-article' src={randomArticle.picture?.url} alt="Article" />}
          <p>{`${randomArticle.description?.substring(0, 100)}...`}</p>
            <Button style={{ background: 'white', border: '2px solid lightgrey', borderRadius: '25px', color: '#50a060' }} as={Link} to="/wiki/article/random" state={{ articleRandom: randomArticle }}>
            Lire la suite
            </Button>
        </div>
      )}
      </Segment>
    </Container>
  );
}

export default RandomArticle;
