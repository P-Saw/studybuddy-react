import { useContext } from 'react';
import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Ttile';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem key={i} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
