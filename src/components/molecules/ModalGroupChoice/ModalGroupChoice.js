import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { ModalContent, Wrapper, Close, Nav, StyledGroupLink } from './ModalGroupChoice.styles';

const ModalGroupChoice = ({ groups, toggleModal }) => {
  return (
    <Wrapper>
      <ModalContent>
        <Close onClick={toggleModal} />
        <Title>Select a group</Title>
        <Nav>
          {groups.map(({ id }) => (
            <StyledGroupLink key={id} to={`/group/${id}`} onClick={toggleModal}>
              {id}
            </StyledGroupLink>
          ))}
        </Nav>
      </ModalContent>
    </Wrapper>
  );
};

export default ModalGroupChoice;
