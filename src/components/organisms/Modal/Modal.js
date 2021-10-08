import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Close } from 'components/molecules/ModalGroupChoice/ModalGroupChoice.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.35)' } }}
    >
      {children}
      <Close onClick={handleClose} />
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
