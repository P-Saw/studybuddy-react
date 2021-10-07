import { StyledGrade } from './Grade.styles';

const Grade = ({ average, isBig }) => {
  return (
    <StyledGrade isBig={isBig} average={average}>
      {average}
    </StyledGrade>
  );
};

export default Grade;
