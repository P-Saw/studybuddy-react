import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 1px solid ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 400;
    &::placeholder {
      color: ${({ theme }) => theme.colors.darkPurple};
      font-weight: 400;
    }
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  border-radius: 25px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  position: absolute;
  max-height: 400px;
  overflow: hidden;
  overflow-y: scroll;
  top: 40px;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  z-index: 100;
  width: 100%;
  padding: 20px;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchResultsItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, highlighted }) => (highlighted ? theme.colors.lightPurple : theme.colors.white)};
  font-weight: 700;
  padding: 10px 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
