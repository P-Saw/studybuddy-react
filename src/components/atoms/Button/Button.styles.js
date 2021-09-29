import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 22px;
  height: 22px;
  margin-left: 0.6rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
