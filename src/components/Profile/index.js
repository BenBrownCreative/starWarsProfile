import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: 0 2vw;
  min-width: 70%;
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
  starships,
  ...props
}) => {
  return (
    <Wrapper>
      <Item>
        <Label>name:</Label>
        {name}
      </Item>
      <Item>
        <Label>height:</Label>
        {height}cm
      </Item>
      <Item>
        <Label>weight:</Label>
        {weight}kg
      </Item>
      <Item>
        <Label>birthdate:</Label>
        {birthdate}
      </Item>
      <Item>
        <Label>hair color:</Label>
        {hair}
      </Item>
      <Item>
        <Label>Films:</Label>
        <ol>
          {films.map((film, i) => (
            <li key={i}>{film.title} </li>
          ))}
        </ol>
      </Item>
      {starships.length > 0 && (
        <Item>
          <Label>Starships:</Label>
          <ol>
            {starships.map((ship, i) => (
              <li key={i}>{ship.name} </li>
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
};

export default Profile;
