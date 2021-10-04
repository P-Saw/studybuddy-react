import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Ttile';

const UsersList = ({ students }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((studentData, i) => (
          <UsersListItem key={i} userData={studentData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
