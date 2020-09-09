import React from 'react';
import propTypes from 'prop-types';

const Profile = ({ name, height, weight, birthdate, hair, ...props }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>height: {height}</div>
      <div>weight: {weight}</div>
      <div>birthdate: {birthdate}</div>
      <div>hair color: {hair}</div>
    </div>
  );
};

Profile.propTypes = {
  name: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
  weight: propTypes.string.isRequired,
  birthdate: propTypes.string.isRequired,
  hair: propTypes.string.isRequired,
};

export default Profile;
