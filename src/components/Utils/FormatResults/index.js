// About Me (height, weight, hair color, date of birth, species information)
// Films Appeared In
// Starships Flown

import getRequest from '../Requests';

async function formatPerson(results) {
  console.log(results);

  return results.map((person) => {
    return {
      name: person.name,
      height: `${person.height}cm`,
      weight: `${person.mass}kg`,
      hair: person.hair_color,
      birthdate: person.birth_year,
      species: person.species,
      films: person.films,
      url: person.url,
      starships: person.starships,
    };
  });
}

export default formatPerson;
