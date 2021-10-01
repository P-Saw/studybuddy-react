import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styles';
import Grade from 'components/atoms/Grade/Grade';
import Name from 'components/atoms/Name/Name';
import { UserShape } from 'types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Grade average={average} />
      <Name name={name} attendance={attendance} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
