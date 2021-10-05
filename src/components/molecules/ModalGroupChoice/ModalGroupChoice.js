import { Title } from 'components/atoms/Title/Ttile';
import React from 'react';
import { ModalContent, Wrapper, Close, Nav, StyledGroupLink } from './ModalGroupChoice.styles';

const ModalGroupChoice = ({ groups, toggleModal, showModal }) => {
  return (
    <Wrapper>
      <ModalContent>
        <Close onClick={toggleModal} />
        <Title>Select a group</Title>
        <Nav>
          {groups.map((group) => (
            <StyledGroupLink key={group} to={`/group/${group}`} onClick={toggleModal}>
              {group}
            </StyledGroupLink>
          ))}
        </Nav>
      </ModalContent>
    </Wrapper>
  );
};

export default ModalGroupChoice;
