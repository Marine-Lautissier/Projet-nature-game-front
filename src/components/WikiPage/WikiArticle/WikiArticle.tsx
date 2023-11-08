import { Container, Header, Image, Divider } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import { useAppSelector } from "../../../hooks/redux";
import React from 'react';

function WikiArticle() {
  const articles = useAppSelector((state) => state.wikiReducer.articleData);
  return (
    <>
    {articles.map((article) => (
    <Container key={article.id} style={{ minHeight: '100vh' }}>
      <Header as="h1" textAlign="center">{article.name}</Header>
      <Divider />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image src={article.picture.url} alt={article.name} />
    </div>
    <Container textAlign="center">
    <p>{article.description}</p>
    </Container>
  </Container>
    ))}
  </>
);
}

export default WikiArticle;
