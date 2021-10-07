import { useState } from 'react';

const useModal = () => {
  const [showStudentModal, setshowStudentModal] = useState(false);
  const toggleStudentModal = () => setshowStudentModal(!showStudentModal);

  return {
    showStudentModal,
    toggleStudentModal,
  };
};

export default useModal;
