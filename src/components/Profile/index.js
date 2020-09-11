import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: 0 2vw;
  min-width: 70%;
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`;

const Note = styled.span`
  opacity: 0.5;
  font-size: 0.8rem;
`;

const H2 = styled.h2`
  color: ${(p) => p.theme.color.secondary};
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.label`
  text-align: right;
  margin-right: 8px;
  width: 20%;
  color: ${(p) => p.theme.color.primaryMuted};
`;

const Profile = ({
  name,
  height,
  weight,
  birthdate,
  hair,
  films,
  species,
  starships,
  ...props
}) => {
  return (
    <Wrapper>
      <Item>
        <Label></Label>
        <H2>About Me</H2>
      </Item>
      <Item>
        <Label>Name:</Label>
        {name}
      </Item>
      <Item>
        <Label>Height:</Label>
        {height}
      </Item>
      <Item>
        <Label>Weight:</Label>
        {weight}
      </Item>
      <Item>
        <Label>Birthdate:</Label>
        {birthdate}
      </Item>
      <Item>
        <Label>Hair Color:</Label>
        {hair}
      </Item>
      <Item>
        <Label>Films:</Label>
        <ol>
          {films.map((film, i) => (
            <li key={i}>
              Episode {film.episode}: {film.title}
            </li>
          ))}
        </ol>
      </Item>
      {starships.length > 0 && (
        <Item>
          <Label>Starships:</Label>
          <ol>
            {starships.map((ship, i) => (
              <li key={i}>
                {ship.name} <Note>{ship.class}</Note>
              </li>
            ))}
          </ol>
        </Item>
      )}
      {species.length > 0 && (
        <Item>
          <Label>Species:</Label>
          <ol>
            {species.map((species, i) => (
              <li key={i}>{species.name} </li>
            ))}
          </ol>
        </Item>
      )}
    </Wrapper>
  );
};

Profile.propTypes = {
  name: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
  weight: propTypes.string.isRequired,
  birthdate: propTypes.string.isRequired,
  hair: propTypes.string.isRequired,
  starships: propTypes.array.isRequired,
  films: propTypes.array.isRequired,
  species: propTypes.array.isRequired,
};

export default Profile;
