import { Card, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import { useAppSelector } from "../../../hooks/redux";
import React from 'react';

function WikiArticle() {
  const articles = useAppSelector((state) => state.wikiReducer.articleData);
  return (
    <Card.Group>
    {articles.map((article) => (
      <Card key={article.id}>
        <Card.Content>
          <Image>{article.picture}</Image>
          <Card.Header><h1>{article.name}</h1></Card.Header>
          <Card.Description>{article.description}</Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
  );
}
export default WikiArticle;
