import { useContext } from 'react';
import { Wrapper } from './Name.styled';
import DeleteButton from '../DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

const Name = ({ name, attendance }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <p>
        {name}
        <DeleteButton deleteUser={() => deleteUser(name)} />
      </p>
      <p>attendance: {attendance}</p>
    </Wrapper>
  );
};

export default Name;
