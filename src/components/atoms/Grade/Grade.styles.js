import styled from 'styled-components';

export const StyledGrade = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) => (average < 3 ? theme.colors.error : average < 4 ? theme.colors.warning : theme.colors.succes)};
`;
