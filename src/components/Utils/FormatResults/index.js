// About Me (height, weight, hair color, date of birth, species information)
// Films Appeared In
// Starships Flown

class FormatResults {
  // async function
  formatPerson(results) {
    console.log(results);
    const people = results.map((person) => {
      return {
        name: person.name,
        height: `${person.height}cm`,
        weight: `${person.mass}kg`,
        hair: person.hair_color,
        birthdate: person.birth_year,
      };
    });
    return people;
  }
}

export default new FormatResults();
