import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blueGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: flex;
  align-items: center;
  gap: 20px;
`;
