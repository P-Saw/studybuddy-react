import { Wrapper } from './Name.styled';
import DeleteButton from '../DeleteButton/DeleteButton';

const Name = ({ name, attendance, deleteUser }) => {
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
