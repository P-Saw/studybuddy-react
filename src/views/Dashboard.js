import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

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

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}
          </Link>
        ))}
      </nav>
      <UsersList students={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
