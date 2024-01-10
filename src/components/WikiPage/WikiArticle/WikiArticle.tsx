import { Container, Header, Image, Divider } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './WikiArticle.scss'
import { useAppSelector } from "../../../hooks/redux";
import React from 'react';
import { useParams } from "react-router-dom";

function WikiArticle() {
  // Obtient l'ID à partir des paramètres d'URL
  const { id } = useParams();
  // Convertit l'ID en nombre entier
  const articleId = id ? parseInt(id, 10) : undefined;

  // Récupère les articles à partir du Redux Store
  const articles = useAppSelector((state) => state.wikiReducer.articleData);

  // Filtre les articles pour trouver celui avec l'ID correspondant
  const filteredArticle = articles.filter((article) => article.id === articleId);

  return (
    <>
      {/* Map sur les articles filtrés */}
      {filteredArticle.map((article) => (
        <Container key={article.id} style={{ minHeight: '100vh' }}>
          <Header as="h1" textAlign="center">{article.name}</Header>
          <Divider />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={article.picture.url} alt={article.name} />
          </div>
          <Container textAlign="center">
            <p id="text-article">{article.description}</p>
          </Container>
        </Container>
      ))}
    </>
  );
}

export default WikiArticle;
