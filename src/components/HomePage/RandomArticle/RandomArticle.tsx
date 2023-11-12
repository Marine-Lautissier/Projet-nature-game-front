import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Container, Button } from 'semantic-ui-react';
import { Link, Route, Routes } from 'react-router-dom';
import ArticleDetailPage from '../ArticleDetailPage/ArticleDetailPage';
import { fetchRandomArticle } from '../../../store/thunks/randomArticle';

import './RandomArticle.scss';

// Fonction qui affiche l'article du jour dans la page principale d'accueil:
function RandomArticle() {
  const dispatch = useAppDispatch();
  const randomArticle = useAppSelector((state) => state.homeReducer.randomArticle);

  useEffect(() => {
    // Appel de l'action asynchrone pour récupérer un article aléatoire
    dispatch(fetchRandomArticle());
  }, [dispatch]);

  // Utilisation du premier article dans la liste randomArticle
  const article = randomArticle.length > 0 ? randomArticle[0] : null;

  return (
    <Container>
      {article && (
        // Affichage de l'article
        <div key={article.id}>
          <h3>Article du jour</h3>
          <h2>{article.name}</h2>
          {article.picture && <img src={article.picture} alt="Article" />}
          <p>{`${article.description.substring(0, 100)}...`}</p>


          <Button as={Link} to="/wiki/random" color="green">
            Lire la suite
          </Button>
        </div>
      )}


      <Routes>
        <Route path="/wiki/random" element={<ArticleDetailPage articleRandom={article} />} />
      </Routes>
    </Container>
  );
}

export default RandomArticle;
