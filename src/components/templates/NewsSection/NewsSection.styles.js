import { Title } from 'components/atoms/Title/Ttile';
import { ViewWrapper } from 'components/molecules/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 600px;
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 50px;
  gap: 30px;
  overflow-y: scroll;

  ${Title} {
    margin: 0;
  }
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.blueGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const ContentWrapper = styled.div`
  img {
    float: right;
    width: 100%;
    margin: 0 0 20px 20px;
    max-width: 250px;
    object-fit: contain;
  }
`;
