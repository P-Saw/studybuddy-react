import { users } from 'data/users';
import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { Wrapper, StyledList } from '../UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem key={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
