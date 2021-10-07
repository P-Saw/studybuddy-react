import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

const UsersList = ({ students, handleOpenStudent }) => {
  return (
    <>
      <StyledList>
        {students.map((studentData, i) => (
          <UsersListItem handleOpenStudent={handleOpenStudent} key={i} userData={studentData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
