import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

const UsersList = ({ students }) => {
  return (
    <>
      <StyledList>
        {students.map((studentData, i) => (
          <UsersListItem key={i} userData={studentData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
