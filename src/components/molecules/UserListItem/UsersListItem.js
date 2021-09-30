import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Grade from 'components/atoms/Grade/Grade';
import Name from 'components/atoms/Name/Name';

const UsersListItem = ({ userData: { average, name, attendance = '0%' }, deleteUser }) => {
  return (
    <Wrapper>
      <Grade average={average} />
      <Name name={name} attendance={attendance} deleteUser={deleteUser} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
