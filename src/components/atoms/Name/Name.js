import { Wrapper } from './Name.styled';
import Button from '../Button/Button';

const Name = ({ name, attendance }) => {
  return (
    <Wrapper>
      <p>
        {name}
        <Button />
      </p>
      <p>attendance: {attendance}</p>
    </Wrapper>
  );
};

export default Name;
