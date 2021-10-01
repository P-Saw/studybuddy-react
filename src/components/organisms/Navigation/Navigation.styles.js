import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.blueGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blueGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  &::after {
    content: '';
    position: absolute;
    opacity: 0;
    width: 18px;
    height: 3px;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.grey};
    transition: opacity 0.4s ease-in-out;
  }

  &.active-link {
    &::after {
      opacity: 1;
    }
  }
`;
