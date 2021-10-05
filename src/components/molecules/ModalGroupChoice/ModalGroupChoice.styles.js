import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(ViewWrapper)`
  max-width: 300px;
  position: relative;
  h1 {
    text-align: center;
    margin-bottom: 35px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledGroupLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.blueGrey};
  cursor: pointer;
  width: 100%;
  padding: 15px 0;

  &:hover {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  width: 25px;
  height: 25px;
  opacity: 0.5;
  cursor: pointer;

  &::before,
  ::after {
    position: absolute;
    left: 11.5px;
    content: '';
    height: 25px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.blueGrey};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
`;
