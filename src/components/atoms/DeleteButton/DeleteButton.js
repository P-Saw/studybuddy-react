import { StyledButton } from './DeleteButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const DeleteButton = ({ deleteUser }) => {
  return (
    <StyledButton onClick={deleteUser}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default DeleteButton;
