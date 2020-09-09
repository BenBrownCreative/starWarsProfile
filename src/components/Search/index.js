import React, { useState } from 'react';
import styled from 'styled-components';

import { PrimaryButton, Label, TextInput } from '../FormElements';
import NetworkService from '../Utils/Queries';
import Profile from '../Profile';

const Wrapper = styled.div`
  font-size: 1.6rem;
  max-width: 500px;
  text-align: left;
  margin: 0 auto;
  padding: 10vh 3vw;
`;

const Search = () => {
  const [searchResults, setsearchResults] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.characterSearch.value.trim();
    setErrorMessage();
    setsearchResults();

    NetworkService.getPeopleSearch(query).then((data) => {
      console.log('Data:', data);
      data === undefined
        ? setErrorMessage('Your search produced no results')
        : setsearchResults(data);
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSearch}>
        <Label>
          Star Wars Character
          <TextInput type='search' name='characterSearch' />
        </Label>
        <PrimaryButton type='submit'>Search</PrimaryButton>
      </form>
      {searchResults && (
        <Profile
          name={searchResults[0].name}
          height={searchResults[0].height}
          weight={searchResults[0].weight}
          birthdate={searchResults[0].birthdate}
          hair={searchResults[0].hair}
        />
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </Wrapper>
  );
};

export default Search;
