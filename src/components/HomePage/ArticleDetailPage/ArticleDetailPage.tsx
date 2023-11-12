import React from 'react';
import { IrandomArticle } from '../../../@types/randomArticle';
import { Container, Image, Header, Segment } from 'semantic-ui-react';

interface ArticleDetailPageProps {
  articleRandom: IrandomArticle;
}

const ArticleDetailPage: React.FunctionComponent<ArticleDetailPageProps> = ({ articleRandom }) => {
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
        {articleRandom.picture && <Image src={articleRandom.picture} alt={articleRandom.name} fluid />}
      </Segment>
    </Container>
  );
};

export default ArticleDetailPage;
