import React from 'react';
import { Container, Image, Header, Segment } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

// Fonction fléchée qui affiche le détail de l'article:
const ArticleDetailPage = () => {

  const location = useLocation();

  const { articleRandom } = location.state;
  console.log(articleRandom);

  return (
    <Container text>
      <Segment padded="very">
        <Header as="h1">{articleRandom.name}</Header>
        {articleRandom.subcategory && (
          <p>
            <strong>Sous-catégorie:</strong> {articleRandom.subcategory.name}
          </p>
        )}
        <p>{articleRandom.description}</p>
        {articleRandom.picture && <Image src={articleRandom.picture.url} alt={articleRandom.name} fluid />}
      </Segment>
    </Container>
  );
};

export default ArticleDetailPage;
