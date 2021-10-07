import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper';
import { Redirect, useParams } from 'react-router';
import { Title } from 'components/atoms/Title/Ttile';
import ModalGroupChoice from 'components/molecules/ModalGroupChoice/ModalGroupChoice';
import { Button } from 'components/atoms/Button/Button';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState([]);
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { showStudentModal, toggleStudentModal } = useModal();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/groups/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const getStudentById = async (id) => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setCurrentStudent(data.students))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenStudentDetails = (id) => {
    getStudentById(id);
    toggleStudentModal();
  };

  if (!id && groups.length > 0) {
    return <Redirect to={`/groups/${groups[0]}`} />;
  }

  return (
    <>
      <ViewWrapper>
        <Title>
          Group {id} <Button onClick={toggleModal}>Change group</Button>
        </Title>
        <UsersList handleOpenStudent={handleOpenStudentDetails} students={students} />
        {showStudentModal ? <Modal toggleStudentModal={toggleStudentModal} currentStudent={currentStudent} /> : null}
      </ViewWrapper>
      {showModal ? <ModalGroupChoice groups={groups} toggleModal={toggleModal} /> : null}
    </>
  );
};

export default Dashboard;
