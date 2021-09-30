import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 6px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blueGrey};
`;
