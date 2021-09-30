import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper';

const Dashboard = ({ deleteUser, users }) => {
  return (
    <ViewWrapper>
      <UsersList deleteUser={deleteUser} users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
