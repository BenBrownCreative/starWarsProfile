import React, { useState } from 'react';
import styled from 'styled-components';

import { PrimaryButton, Label, TextInput } from '../FormElements';
import search from '../Utils/Queries';
import Profile from '../Profile';

const Wrapper = styled.div`
  width: 100%;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Yoda = styled.img`
  width: 400px;
  height: 100%;
`;

const Form = styled.form`
  font-size: 1.4rem;
  max-width: 500px;
  text-align: left;
  align-self: flex-end;
  margin-bottom: 50px;
`;

const ResultsContainer = styled.div`
  width: 100%;
  margin: 5vh 5vw 0 0;
  display: flex;
  justify-content: center;
`;

const Name = styled.li`
  padding: 0.5rem 1rem;
  margin: 0 0 1rem;
  border-radius: 3px;
  cursor: pointer;
  background: ${(p) =>
    p.selected
      ? `${p.theme.color.secondary}`
      : `${p.theme.color.secondaryMuted}`};

  &:hover {
    background: ${(p) => p.theme.color.secondary};
  }
`;

const Names = styled.ul`
  width: 300px;
`;

const Search = () => {
  const [searchResults, setsearchResults] = useState();
  const [selectedProfile, setSelectedProfile] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.characterSearch.value.trim();
    setErrorMessage();
    setsearchResults();

    search(query).then((results) => {
      if (results.name === 'Error') {
        setErrorMessage(results.message);
      } else {
        console.log('final:', results);
        setSelectedProfile(0);
        setsearchResults(results);
      }
    });
  };

  const handleSelected = (selected) => {
    setSelectedProfile(parseInt(selected.currentTarget.id));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Yoda src={require('./yoda.png')} />
        <Form onSubmit={handleSearch}>
          <Label>
            Search for Star Wars Characters by name you can
            <TextInput
              type='search'
              name='characterSearch'
              placeholder='name'
            />
          </Label>
          <PrimaryButton type='submit'>Search</PrimaryButton>
        </Form>
      </FormWrapper>

      <ResultsContainer>
        {searchResults && (
          <Names>
            {searchResults.map((person, i) => (
              <Name
                key={i}
                id={i}
                onClick={handleSelected}
                selected={i === selectedProfile}
              >
                {person.name}{' '}
              </Name>
            ))}
          </Names>
        )}

        {searchResults && <Profile {...searchResults[selectedProfile]} />}

        {errorMessage && <div>{errorMessage}</div>}
      </ResultsContainer>
    </Wrapper>
  );
};

export default Search;
