import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Close } from 'components/molecules/ModalGroupChoice/ModalGroupChoice.styles';
import { ModalContent } from './Modal.style';
import StudentInfo from 'components/molecules/StudentInfo/StudentInfo';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ toggleStudentModal, currentStudent }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Wrapper>
      <ModalContent>
        <Close onClick={() => toggleStudentModal()} />
        <StudentInfo currentStudent={currentStudent} />
      </ModalContent>
    </Wrapper>,
    modalNode
  );
};

export default Modal;
