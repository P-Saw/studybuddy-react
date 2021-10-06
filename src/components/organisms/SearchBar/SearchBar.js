import { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from './SearchBar.styles';
import axios from 'axios';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/studentssearch/${searchPhrase}`)
      .then(({ data }) => setFilteredStudents(data.students))
      .catch((err) => console.log(err));
  }, [searchPhrase]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input value={searchPhrase} onChange={(e) => setSearchPhrase(e.target.value)} name="Search" id="Search" placeholder="Search..." />
        {searchPhrase ? (
          <SearchResults>
            {filteredStudents.length > 0 ? filteredStudents.map((student) => <li key={student.id}>{student.name}</li>) : <li>No results</li>}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
