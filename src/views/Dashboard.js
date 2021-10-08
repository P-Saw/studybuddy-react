import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { Button } from 'components/atoms/Button/Button';
import ModalGroupChoice from 'components/molecules/ModalGroupChoice/ModalGroupChoice';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const [showGroupModal, setShowGroupModal] = useState(false);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const toggleModal = () => {
    setShowGroupModal(!showGroupModal);
  };

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <GroupWrapper>
        <TitleWrapper>
          <Title as="h2">
            Group {id} <Button onClick={toggleModal}>Change group</Button>
          </Title>
        </TitleWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
        {showGroupModal ? <ModalGroupChoice groups={groups} toggleModal={toggleModal} /> : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
