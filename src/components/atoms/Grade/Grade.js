import { StyledGrade } from './Grade.styles';

const Grade = ({ average }) => {
  return <StyledGrade average={average}>{average}</StyledGrade>;
};

export default Grade;
