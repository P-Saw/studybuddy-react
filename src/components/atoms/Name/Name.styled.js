import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem;
  p {
    color: ${({ theme }) => theme.colors.blueGrey};
    margin: 0;
  }
  p:first-child {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    align-items: center;
  }
  p:last-child {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
