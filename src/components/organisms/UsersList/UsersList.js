import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { StyledList } from '../UsersList.styles';
import { Title } from 'components/atoms/Title/Ttile';

const UsersList = ({ deleteUser, users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem key={i} userData={userData} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
