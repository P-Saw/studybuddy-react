import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper';
import { Redirect, useParams } from 'react-router';
import { Title } from 'components/atoms/Title/Ttile';
import ModalGroupChoice from 'components/molecules/ModalGroupChoice/ModalGroupChoice';
import { Button } from 'components/atoms/Button/Button';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

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
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!id && groups.length > 0) {
    return <Redirect to={`/group/${groups[0]}`} />;
  }

  return (
    <>
      <ViewWrapper>
        <Title>
          Group {id} <Button onClick={toggleModal}>Change group</Button>
        </Title>
        <UsersList students={students} />
      </ViewWrapper>
      {showModal ? <ModalGroupChoice groups={groups} toggleModal={toggleModal} showModal={showModal} /> : null}
    </>
  );
};

export default Dashboard;
