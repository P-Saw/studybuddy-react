import { useState } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import axios from 'axios';

const SearchBar = () => {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: filteredStudents,
    onInputValueChange: async ({ inputValue }) => {
      axios
        .get(`/studentssearch/${inputValue}`)
        .then(({ data }) => setFilteredStudents(data.students))
        .catch((err) => setFilteredStudents([]));
    },
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search..." />
        {
          <SearchResults isVisible={isOpen} {...getMenuProps()}>
            {isOpen && filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <SearchResultsItem highlighted={highlightedIndex === index} {...getItemProps({ student, index })} key={student.id}>
                  {student.name}
                </SearchResultsItem>
              ))
            ) : (
              <SearchResultsItem>No results</SearchResultsItem>
            )}
          </SearchResults>
        }
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
