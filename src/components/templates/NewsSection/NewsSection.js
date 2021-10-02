import { useState, useEffect } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Ttile';
import React from 'react';
import { ArticleWrapper, ContentWrapper, TitleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';

export const query = `{
        allArticles {
          id
          title
		      category
          content
          image{
            url
          }
        }
        }`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <Title>University news feed</Title>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              {image ? <img src={image.url} alt="article image" /> : null}
              <p>{content}</p>
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <Title>{error ? error : 'Loading...'}</Title>
      )}
    </Wrapper>
  );
};

export default NewsSection;
