// About Me (height, weight, hair color, date of birth, species information)
// Films Appeared In
// Starships Flown

import getRequest from '../Requests';

const characterFormatted = (char) => {
  return {
    name: char.name,
    height: isNaN(char.height)
      ? char.height
      : `${Math.round(char.height * 0.393701)}in`,
    weight: isNaN(char.mass)
      ? char.mass
      : `${Math.round(char.mass * 2.20462)}lbs`,
    hair: char.hair_color,
    birthdate: char.birth_year,
    species: char.species.map((species) => {
      return {
        name: species.name,
      };
    }),
    films: char.films.map((film) => {
      return {
        title: film.title,
        episode: film.episode_id,
      };
    }),
    url: char.url,
    starships: char.starships.map((ship) => {
      return {
        name: ship.name,
        class: ship.starship_class,
      };
    }),
  };
};

async function formatCharacter(character, i) {
  // add id for selecting which character profile to display
  character.id = i;

  try {
    // these should be refactored into a reusable function
    character.films = await Promise.all(
      character.films.map(async (url) => {
        return getRequest(url);
      })
    );
    character.starships = await Promise.all(
      character.starships.map(async (url) => {
        return getRequest(url);
      })
    );
    character.species = await Promise.all(
      character.species.map(async (url) => {
        return getRequest(url);
      })
    );

    return characterFormatted(character);
  } catch (err) {
    console.log(err);
  }
}

export default formatCharacter;
