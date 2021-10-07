import Grade from 'components/atoms/Grade/Grade';
import { Title } from 'components/atoms/Title/Ttile';
import React from 'react';

const StudentInfo = ({ currentStudent }) => {
  return (
    <>
      <div>
        <Grade isBig average={currentStudent.average} />
        <Title>{currentStudent.name}</Title>
      </div>
      <div>
        <h3>Course:</h3>
        <p>Economy</p>
        <h3>Average grades:</h3>
        <div>
          <p>modern economy</p>
          <Grade average={3.4} />
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
